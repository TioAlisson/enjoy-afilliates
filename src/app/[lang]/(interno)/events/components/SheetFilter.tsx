import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import IconButton from "@/public/assets/icon/icon-event.svg"
import InputFilter from "./InputFilter"

const categoryOptions = [
  { value: "all-events", label: "All" },
  { value: "music", label: "Live Music" },
  { value: "other", label: "Other" },
  { value: "charities-causes", label: "Charities & Causes" },
  { value: "sports-fitness", label: "Sports & Fitness" },
  { value: "food-drink", label: "Food & Drink" },
  { value: "night-clubs", label: "Night Clubs" },
  { value: "business", label: "Business" }
]

const typeOptions = [
  { value: "all-events", label: "All" },
  { value: "online", label: "Online" },
  { value: "presencial", label: "Presencial" }
]

const filterFields = [
  { label: "Price", type: "number", id: "price", name: "price", range: true },
  { label: "Category", type: "select", id: "category-event", name: "category-event", options: categoryOptions },
  { label: "Type", type: "select", id: "type-event", name: "type-event", options: typeOptions },
  { label: "Date", type: "date", id: "date-event", name: "date-event" },
]

export function SheetFilter() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="red" className="py-6">
          <Image src={IconButton} alt="Icon Event" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-red-700 text-center text-3xl font-bold py-10 border-b-2">
            Filter
          </SheetTitle>
        </SheetHeader>
        <div>
          {filterFields.map((field, index) => {
            if (field.range) {
              // Para os campos que são intervalos (Price)
              return (
                <div key={index} className="p-5 border-b-2">
                  <label htmlFor={field.id} className="text-right">{field.label}</label>
                  <div className="flex items-center gap-4">
                    <InputFilter type={field.type} id={`${field.id}-min`} name={`${field.name}-min`} />
                    <span>-</span>
                    <InputFilter type={field.type} id={`${field.id}-max`} name={`${field.name}-max`} />
                  </div>
                </div>
              )
            }
            return (
              <div key={index} className="p-5 border-b-2">
                <InputFilter
                  label={field.label}
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  options={field.options}
                />
              </div>
            )
          })}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" variant="red" className="w-full py-6 mx-5 mt-10">Filter</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
