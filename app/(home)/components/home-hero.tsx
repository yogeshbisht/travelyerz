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
import { Button } from "@/components/ui/button";
import Categories from "./categories";

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

  const onSubmit = (data: HomeHeroValidatorType) => {
    console.log(data);
  };

  return (
    <SectionContainer
      centered
      bgImage="https://picsum.photos/1920/1080"
      highlight="Plan your trip with ease!"
      title="Explore the world with us"
      description="Book your dream vocation today and get exclusive offers!"
    >
      <div className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
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
                      <DateRangePicker onDateRangeSelected={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="travelType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-light">
                      Travel Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a travel type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {travelTypeOptions.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-light">Duration</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {durationOptions.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6">
              <Button
                className="bg-brand-dark hover:bg-brand font-bold uppercase h-12 w-[400px]"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </SectionContainer>
  );
};

export default HomeHero;
