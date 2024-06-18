"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useCountries from "@/app/hooks/use-countries";
import SectionContainer from "@/components/shared/section-container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import DateRangePicker from "@/components/shared/date-range-picker";
import { DateTime } from "luxon";

const travelTypeOptions = [
  { value: "city", label: "City Tour" },
  { value: "family", label: "Family Tour" },
  { value: "village", label: "Village Tour" },
];

const durationOptions = [
  { value: "3", label: "3 Days" },
  { value: "5", label: "5 Days" },
  { value: "7", label: "7 Days" },
];

const HomeHeroValidator = z.object({
  location: z.string(),
  dateRange: z.object({
    start: z.number(),
    end: z.number(),
  }),
  travelType: z.string(),
  duration: z.string(),
});

type HomeHeroValidatorType = z.infer<typeof HomeHeroValidator>;

const HomeHero = () => {
  const { availableCountries } = useCountries();
  const form = useForm<HomeHeroValidatorType>({
    resolver: zodResolver(HomeHeroValidator),
    defaultValues: {
      location: "",
      dateRange: {
        start: DateTime.now().toUnixInteger(),
        end: DateTime.now().plus({ days: 1 }).toUnixInteger(),
      },
      travelType: "",
      duration: "",
    },
  });

  return (
    <SectionContainer
      bgImage="https://picsum.photos/1920/1080"
      highlight="Plan your trip with ease!"
      title="Explore the world with us"
      description="Book your dream vocation today and get exclusive offers!"
    >
      <div className="p-8">
        <Form {...form}>
          <form>
            <div className="flex flex-col items-center justify-center md:justify-stretch md:flex-row gap-6">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-brand-light">Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableCountries().map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            <div className="flex flex-row items-center gap-3">
                              <div>{item.flag}</div>
                              <div>
                                {item.label},
                                <span className="text-muted-foreground ml-1">
                                  {item.region}
                                </span>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateRange"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-brand-light">
                      Date Range
                    </FormLabel>
                    <FormControl>
                      <DateRangePicker
                        {...field}
                        onDateRangeSelected={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </SectionContainer>
  );
};

export default HomeHero;
