"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { useMutation } from "@tanstack/react-query"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function Form() {
    const { mutate, isPending, error, isSuccess } = useMutation({
        mutationFn: async (data: any) => {
            const response = await fetch("/api/send-email", {
                method: "POST",
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorResponse = await response.json() as Error
                throw new Error(errorResponse.message || "Failed to submit form. Please try again.")
            }

            return response.json()
        },
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        mutate(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-5 xl:grid-cols-4">
                <div className="space-y-1">
                    <Label>your name</Label>
                    <Input required name="name" placeholder="Your name" />
                </div>
                <div className="space-y-1">
                    <Label>email</Label>
                    <Input required name="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-1">
                    <Label>phone number</Label>
                    <Input required name="phone" placeholder="Your phone number" />
                </div>
                <div className="space-y-1">
                    <Label>age</Label>
                    <Input required name="age" placeholder="Your age" defaultValue={32} type="number" />
                </div>
                <div className="space-y-1">
                    <Label>preferred contact method</Label>
                    <Select required name="contactMethod" >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a contact method" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <Label>state</Label>
                    <Select required name="state" >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="AL">Alabama</SelectItem>
                            <SelectItem value="AK">Alaska</SelectItem>
                            <SelectItem value="AZ">Arizona</SelectItem>
                            <SelectItem value="AR">Arkansas</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="CO">Colorado</SelectItem>
                            <SelectItem value="CT">Connecticut</SelectItem>
                            <SelectItem value="DE">Delaware</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                            <SelectItem value="GA">Georgia</SelectItem>
                            <SelectItem value="HI">Hawaii</SelectItem>
                            <SelectItem value="ID">Idaho</SelectItem>
                            <SelectItem value="IL">Illinois</SelectItem>
                            <SelectItem value="IN">Indiana</SelectItem>
                            <SelectItem value="IA">Iowa</SelectItem>
                            <SelectItem value="KS">Kansas</SelectItem>
                            <SelectItem value="KY">Kentucky</SelectItem>
                            <SelectItem value="LA">Louisiana</SelectItem>
                            <SelectItem value="ME">Maine</SelectItem>
                            <SelectItem value="MD">Maryland</SelectItem>
                            <SelectItem value="MA">Massachusetts</SelectItem>
                            <SelectItem value="MI">Michigan</SelectItem>
                            <SelectItem value="MN">Minnesota</SelectItem>
                            <SelectItem value="MS">Mississippi</SelectItem>
                            <SelectItem value="MO">Missouri</SelectItem>
                            <SelectItem value="MT">Montana</SelectItem>
                            <SelectItem value="NE">Nebraska</SelectItem>
                            <SelectItem value="NV">Nevada</SelectItem>
                            <SelectItem value="NH">New Hampshire</SelectItem>
                            <SelectItem value="NJ">New Jersey</SelectItem>
                            <SelectItem value="NM">New Mexico</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="NC">North Carolina</SelectItem>
                            <SelectItem value="ND">North Dakota</SelectItem>
                            <SelectItem value="OH">Ohio</SelectItem>
                            <SelectItem value="OK">Oklahoma</SelectItem>
                            <SelectItem value="OR">Oregon</SelectItem>
                            <SelectItem value="PA">Pennsylvania</SelectItem>
                            <SelectItem value="RI">Rhode Island</SelectItem>
                            <SelectItem value="SC">South Carolina</SelectItem>
                            <SelectItem value="SD">South Dakota</SelectItem>
                            <SelectItem value="TN">Tennessee</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="UT">Utah</SelectItem>
                            <SelectItem value="VT">Vermont</SelectItem>
                            <SelectItem value="VA">Virginia</SelectItem>
                            <SelectItem value="WA">Washington</SelectItem>
                            <SelectItem value="WV">West Virginia</SelectItem>
                            <SelectItem value="WI">Wisconsin</SelectItem>
                            <SelectItem value="WY">Wyoming</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1 xl:col-span-2">
                    <Label>income range</Label>
                    <Select required name="incomeRange" >
                        <SelectTrigger>
                            <SelectValue placeholder="Select an income range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0-100K">$0 - $100,000</SelectItem>
                            <SelectItem value="101K-150K">$101,000 - $150,000</SelectItem>
                            <SelectItem value="151K-250K">$151,000 - $250,000</SelectItem>
                            <SelectItem value="251K-500K">$251,000 - $500,000</SelectItem>
                            <SelectItem value="501K+">$501,000+</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1 xl:col-span-4">
                    <Label>Please let me know anything that would be helpful for our meeting</Label>
                    <Textarea name="message" className="placeholder:text-dark-green/75" placeholder="Your message" rows={4} />
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-6 xl:mt-14 xl:flex-row xl:gap-10">
                <div className="flex space-x-3 items-center">
                    <Checkbox required id="privacy" />
                    <Label className="[text-transform:none] text-base" htmlFor="privacy">I agree to the <Link className="text-green" href="/privacy">Privacy Policy</Link></Label>
                </div>
                <Button type="submit" className="xl:order-first group" size="lg" disabled={isPending}>
                    {isPending ? <Loader2 className="size-6 animate-spin" /> : <span className="h-0.5 w-2.5 bg-dark-green group-hover:w-6 transition-all duration-300"></span>}
                    <span className="ml-3 flex-1">Get Free Consultation</span>
                </Button>
            </div>
            {error && (<div className="mt-6 xl:mt-14 rounded-xl bg-foreground p-6 flex items-center gap-3">
                <AlertCircle className="size-6 text-destructive" />
                <p className="text-destructive">{error.message}</p>
            </div>)}
            {isSuccess && (
                <div className="mt-6 xl:mt-14 rounded-xl bg-foreground p-6 flex items-center gap-3">
                    <CheckCircle className="size-6 text-green-500" />
                    <p className="text-green-500">We have received your request. We will get back to you as soon as possible.</p>
                </div>
            )}
        </form>
    )
}