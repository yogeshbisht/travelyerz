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
    startDate: z.date(),
    endDate: z.date(),
  }),
  travelType: z.string(),
  duration: z.string(),
});

type HomeHeroValidatorType = z.infer<typeof HomeHeroValidator>;

const HomeHero = () => {
  const { getAll } = useCountries();
  const availableCountries = getAll();
  const form = useForm<HomeHeroValidatorType>({
    resolver: zodResolver(HomeHeroValidator),
    defaultValues: {
      location: "",
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
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
      <div className="flex justify-center">
        <div className="flex flex-col gap-6 md:gap-4 mb-8">
          <Form {...form}>
            <form>
              <div className="flex flex-col md:flex-row gap-6">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="text-xs sm:text-sm">
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {availableCountries.map((item) => (
                            <SelectItem
                              key={item.value}
                              value={item.value}
                              className="text-xs sm:text-sm"
                            >
                              <div className="flex flex-row items-center gap-3">
                                <div>{item.flag}</div>
                                <div>
                                  {item.label},
                                  <span className="text-neutral-500 ml-1">
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
              </div>
            </form>
          </Form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HomeHero;
