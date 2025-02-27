"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fuels } from "@/constants";
import { SearchFuel } from "@/types";
// import { SearchButton } from './SearchBar';

export default function ComboboxDemo({ fuel, setFuel }: SearchFuel) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {fuel
            ? fuels.find((item) => item.value === fuel)?.title
            : "Select Fuel Type..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          {/* <SearchButton otherClasses="sm:hidden" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search manufacturer..." className="h-9" />
          <CommandList>
            <CommandEmpty>No manufacturer found.</CommandEmpty>
            <CommandGroup>
              {fuels.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setFuel(currentValue === fuel ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.value}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      fuel === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}