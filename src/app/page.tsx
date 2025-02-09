import { AnimatedSection } from "@/components/animated-section";
import { Logo, LogoText } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { WordRotate } from "@/components/word-rotate";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Container } from "../components/container";
import { AssetProtection, CashFlowPlanning, DebtPayoffPlanning, EducationPlanning, EstatePlanning, ExitPlanning, FeeBasedFinancialPlanning, InsurancePlanning, InvestmentPlanning, MajorLifestyleDecisionPlanning, RealEstateAnalysis, RetirementPlanning, RiskManagementAnalysis, TopOnePercent } from "@/components/service-icons";
import { BusinessOwners, HighIncomeEarners, IndividualsAndFamilies, Retirees, TechProfessionals, You } from "@/components/who-we-serve-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Linkedin, X } from "@/components/social-icons";

const words = ['entrepreneurs', 'business owners', 'high net worth individuals', 'innovators', 'tech professionals', 'attorneys', 'retirees']

export default function Home() {
  return (
    <div>
      <div className="relative bg-dark-green dark">
        <img src="/hero-graphics.png" alt="" className="absolute inset-0 object-cover min-w-full min-h-full object-right" />
        <Container className="max-w-screen-xl relative pb-4">
          <header className="pt-6 justify-between flex items-center dark">
            <div className="flex space-x-[15px]">
              <Logo className="size-[58px] lg:size-[76px]" />
              <LogoText className="w-[89px] lg:w-[135px] h-auto text-foreground" />
            </div>
            <nav>
              <ul className="items-center gap-8 hidden lg:flex">
                <li>
                  <Link href="#services" className={buttonVariants({ variant: "link" })}>Services</Link>
                </li>
                <li>
                  <Link href="#about" className={buttonVariants({ variant: "link" })}>Pricing</Link>
                </li>
                <li>
                  <Link href="#contact" className={cn(buttonVariants({ variant: "outline" }))}>Get A Free Consultation</Link>
                </li>
              </ul>
              <Sheet>
                <SheetTrigger className="lg:hidden" aria-label="Menu Toggle">
                  <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="1" fill="white" />
                    <rect y="8" width="30" height="1" fill="white" />
                    <path d="M16 16H30V17H16V16Z" fill="#18AA68" />
                  </svg>
                </SheetTrigger>
                <SheetContent side="top" className="shadow-none h-screen">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetHeader>
                    <div className="flex space-x-[15px]">
                      <Logo className="size-[58px] lg:size-[76px]" />
                      <LogoText className="w-[89px] lg:w-[135px] h-auto text-foreground" />
                    </div>
                  </SheetHeader>
                  <ul className="items-center space-y-6 mt-8">
                    <AnimatedSection initial={{ opacity: 0, y: 12 }} delay={0.05}>
                      <li>
                        <SheetClose asChild>
                          <Link className={cn(buttonVariants({ variant: "link" }), "text-xl")} href="/#services">Services</Link>
                        </SheetClose>
                      </li>
                    </AnimatedSection>
                    <AnimatedSection initial={{ opacity: 0, y: 12 }} delay={0.1}>
                      <li>
                        <SheetClose asChild>
                          <Link className={cn(buttonVariants({ variant: "link" }), "text-xl")} href="/#pricing">Pricing</Link>
                        </SheetClose>
                      </li>
                    </AnimatedSection>
                    <AnimatedSection initial={{ opacity: 0, y: 12 }} delay={0.2}>
                      <li>
                        <SheetClose asChild>
                          <Link className={cn(buttonVariants({ variant: "default" }), "w-full md:w-auto group")} href="/#consultation"><span className="h-0.5 w-2.5 bg-dark-green group-hover:w-6 transition-all duration-300"></span><span className="ml-3">Get Free Consultation</span></Link>
                        </SheetClose>
                      </li>
                    </AnimatedSection>
                  </ul>
                </SheetContent>
              </Sheet>
            </nav>
          </header>
        </Container>

        <Container className="max-w-none flex flex-col xl:flex-row px-0 relative mt-6 xl:mt-0 xl:space-x-16 xl:pt-20 xl:pb-36 xl:justify-between">
          <div className="text-foreground text-center xl:text-left xl:max-w-[640px]">
            <h1 className="min-h-[3lh] sm:min-h-[2lh] text-balance">
              <span>Strategic Wealth Management for</span><br />
              <WordRotate className="text-green min-h-24" words={words} />
            </h1>
            <div className="mt-2.5 xl:mt-6 text-base xl:text-xl">
              <p className="text-foreground/70">Maximize growth potential and minimize tax burden with proven strategies <br className="xl:hidden" /><span className="text-foreground">from Top 1% financial experts.</span></p>
            </div>
            <div className="mt-4 xl:mt-14 flex flex-col gap-[14px] justify-center items-center max-w-[85%] mx-auto xl:mx-0 xl:items-start xl:flex-row xl:justify-start">
              <Link href="/contact" className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto group items-center")}> <span className="h-0.5 w-2.5 bg-dark-green group-hover:w-6 transition-all duration-300"></span><span className="ml-3">Get Free Consultation</span></Link>
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}>Pricing Plans</Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center xl:items-start mt-5 xl:mt-0">
            <div className="xl:hidden absolute -bottom-1 inset-x-0 h-8 bg-gray-100"></div>
            <div className="relative">
              <img src="/iarann.png" alt="" className="mx-auto xl:mx-0 xl:w-[400px]" />
              <div className="absolute bottom-3.5 left-3.5 xl:left-0 xl:-translate-x-1/2 xl:bottom-10">
                <div className="rounded-[24px] bg-green p-4 pt-7 text-center">
                  <TopOnePercent className="size-[54px] mx-auto" />
                  <div className="mt-5 text-foreground">
                    <p className="font-heading text-3xl font-medium">Top 1%</p>
                    <p className="text-sm">financial experts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="relative bg-gray-100 py-9 xl:py-[92px] overflow-hidden">
        <img className="absolute inset-0 bg-cover w-full h-full" src="/services-bg.png" alt="" />
        <Container className="overflow-hidden relative">
          <div className="relative">
            <div className="flex flex-col xl:flex-row xl:space-x-24">
              <h2 className="xl:max-w-[290px] w-full">Our <br className="hidden xl:block" />Services</h2>
              <p className="mt-1 xl:mt-0 xl:first-letter:pl-24 xl:text-2xl xl:flex-1">We offer a comprehensive suite of financial planning and wealth management services, each tailored to your unique situation and goals. Our holistic approach ensures every aspect of your financial life is carefully considered and optimized.</p>
            </div>
            <ul className="mt-6 grid gap-[14px] xl:grid-cols-3 xl:gap-5 xl:mt-16">
              {services.map(service => (
                <li className="bg-background rounded-[24px] p-6 xl:p-8 group hover:bg-dark-green transition-colors duration-300" key={service.id}>
                  <div className="flex flex-wrap space-x-6 items-center xl:flex-col xl:items-start xl:space-x-0 xl:space-y-12">
                    <service.icon className="size-14 text-green" />
                    <h3 className="text-2xl/[30px] font-medium flex-1 text-foreground transition-colors group-hover:text-light-green duration-300">
                      <span className="block">{service.title}</span>
                    </h3>
                  </div>
                  <p className="mt-4 xl:mt-2 transition-colors text-foreground group-hover:text-background/70 duration-300">{service.content}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <p className="text-2xl">Want to know more about our services?</p>
              <Link href="/contact" className={cn(buttonVariants({ variant: "default", size: "lg" }), "mt-4 group")}><span className="h-0.5 w-2.5 bg-dark-green group-hover:w-6 transition-all duration-300"></span><span className="ml-3">Get Free Consultation</span></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-8 pb-10 xl:pt-24 xl:pb-20  bg-cover" style={{ backgroundImage: "url('/pricing-bg-xl.png')" }}>
        <Container>
          <div className="flex flex-col xl:flex-row xl:space-x-24 dark">
            <h2 className="text-foreground xl:max-w-[400px] w-full">Our Transparent<br className="hidden xl:block" />Pricing Options</h2>
            <p className="text-foreground/70 mt-1 xl:mt-0 xl:first-letter:pl-24 xl:text-2xl xl:flex-1">We offer two distinct pricing models designed to fit your specific needs and preferences: Assets Under Management (AUM) and Fee-Based Financial Planning. Both options are transparent and straightforward, ensuring you know exactly what you're paying for.</p>
          </div>

          <div className="mt-6 xl:mt-16 grid gap-4 xl:gap-5">
            <div className="relative">
              <div className="absolute -top-2 -right-2 bg-green w-40 h-48 rounded-[34px] xl:w-[468px] xl:h-[214px] xl:-top-4 xl:-right-4 xl:rounded-[40px]"></div>
              <div className="bg-background rounded-[24px] p-6 xl:p-8 relative xl:flex xl:space-x-24">
                <div className="xl:max-w-[480px] w-full">
                  <h3 className="text-3xl xl:text-[40px]/[44px] font-medium">Assets Under Management (AUM) Pricing</h3>
                  <p className="mt-2 xl:mt-4 xl:text-xl">Our AUM pricing is based on a percentage of the assets we manage for you. This approach aligns our interests with yours, as our compensation grows only when your portfolio does.</p>
                </div>
                <div className="mt-6 xl:mt-0 bg-gray-100 rounded-xl px-4 py-1 xl:px-8 xl:py-4 grid flex-1">
                  <div className="items-center h-11 flex justify-between border-b border-gray-200">
                    <h4 className="font-medium text-lg">Asset Level</h4>
                    <h4 className="font-medium text-lg">Annual Fee</h4>
                  </div>
                  <div className="items-center h-11 flex justify-between border-b border-gray-200">
                    <span>$250,000 - $500,000</span>
                    <span>1.2%</span>
                  </div>
                  <div className="items-center h-11 flex justify-between border-b border-gray-200">
                    <span>$500,001 - $1,000,000</span>
                    <span>1.1%</span>
                  </div>
                  <div className="items-center h-11 flex justify-between border-b border-gray-200">
                    <span>$1,000,001 - $3,000,000</span>
                    <span>1%</span>
                  </div>
                  <div className="items-center h-11 flex justify-between border-b border-gray-200">
                    <span>$3,000,001 - $8,000,000	</span>
                    <span>0.9%</span>
                  </div>
                  <div className="items-center h-11 flex justify-between border-b border-gray-200">
                    <span>$8,000,001 - $15,000,000	</span>
                    <span>0.8%</span>
                  </div>
                  <div className="items-center h-11 flex justify-between border-b border-gray-200">
                    <span>$15,000,001 - $25,000,000	</span>
                    <span>0.7%</span>
                  </div>
                  <div className="items-center h-11 flex justify-between border-b border-gray-200">
                    <span>$25,000,001+</span>
                    <span>0.6%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-2 -left-2 bg-green w-40 h-48 rounded-[34px] xl:w-[468px] xl:h-[214px] xl:-bottom-4 xl:-left-4 xl:rounded-[40px]"></div>
              <div className="bg-background rounded-[24px] p-6 xl:p-8 relative xl:flex xl:space-x-24">
                <div className="xl:max-w-[480px] w-full">
                  <h3 className="text-3xl xl:text-[40px]/[44px] font-medium">Fee-Based Financial Planning</h3>
                  <p className="mt-2 xl:mt-4 xl:text-xl">Our Fee-Based Financial Planning option is perfect for those who prefer a fixed-fee approach. This plan is based on your household's gross income and provides comprehensive financial planning services.</p>
                </div>
                <div className="flex-1">
                  <div className="mt-4 xl:mt-0 bg-gray-100 rounded-xl px-4 xl:p-6 py-[14px] relative flex-1">
                    <div className="flex space-x-4 xl:space-x-0">
                      <div className="flex-1">
                        <h4 className="font-medium text-2xl/[30px] xl:text-3xl text-green flex-1">1% of Household Gross Income</h4>
                        <p className="hidden xl:block">With a ceiling of $10,000 or a minimum of $2,500, whichever is higher.</p>
                      </div>
                      <FeeBasedFinancialPlanning className="size-12 xl:order-first xl:!mr-5" />
                    </div>
                    <p className="xl:hidden">With a ceiling of $10,000 or a minimum of $2,500, whichever is higher.</p>
                  </div>
                  <div className="grid mt-4 gap-6">
                    <p><strong>Example 1:</strong> A married couple collectively earning $520,000 a year would pay a fee of $5,200.</p>

                    <p><strong>Example 2:</strong> A single individual earning $190,000 per year would pay a fee of $2,500 (as it&apos;s the higher of the two options).</p>

                    <p>This pricing model ensures that you receive comprehensive financial planning services at a predictable cost, regardless of your asset level.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-11 text-center">
              <Link href="/contact" className={cn(buttonVariants({ variant: "default", size: "lg" }), "group")}><span className="h-0.5 w-2.5 bg-dark-green group-hover:w-6 transition-all duration-300"></span><span className="ml-3">Get Free Consultation</span></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 xl:py-24 bg-gray-100 min-h-screen bg-cover xl:bg-center" style={{ backgroundImage: "url('/who-bg.png')" }}>
        <Container>
          <div className="flex flex-col xl:flex-row xl:space-x-24">
            <h2 className="xl:max-w-[290px] w-full">Who We <br className="hidden xl:block" />Serve</h2>
            <p className="mt-1 xl:mt-0 xl:first-letter:pl-24 xl:text-2xl xl:flex-1">We specialize in crafting tailored financial solutions for discerning clients across industries. Our expertise spans from emerging entrepreneurs to established wealth managers, ensuring personalized strategies for every unique situation.</p>
          </div>
          <ul className="mt-5 xl:mt-16 grid gap-[14px] xl:grid-cols-2 xl:gap-5">
            {whoWeServe.map(who => (
              <li className="bg-background rounded-[24px] p-6 xl:p-8 group hover:bg-dark-green transition-colors duration-300" key={who.id}>
                <div className="flex space-x-6">
                  <who.icon className="size-14 text-green" />
                  <div className="flex-1">
                    <h3 className="text-2xl/[30px] font-medium group-hover:text-light-green transition-colors duration-300">
                      <span className="block">{who.title}</span>
                    </h3>
                    <p className="mt-2 group-hover:text-background/70 transition-colors duration-300">{who.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-7 xl:mt-16 text-center">
            <Link href="/contact" className={cn(buttonVariants({ variant: "default", size: "lg" }), "group")}><span className="h-0.5 w-2.5 bg-dark-green group-hover:w-6 transition-all duration-300"></span><span className="ml-3">Get Free Consultation</span></Link>
          </div>
        </Container>
      </section>

      <section className="py-8 xl:pb-12 xl:pt-24 bg-cover bg-dark-green bg-[url('/footer-bg-sm.png')] lg:bg-[url('/footer-bg.png')]">
        <div className="pb-10 xl:pb-24 border-b border-background/20">
          <Container className="dark">
            <div className="flex flex-col xl:flex-row xl:space-x-24 dark xl:justify-between">
              <h2 className="text-foreground xl:max-w-[400px] w-full">Schedule a<br className="hidden xl:block" />Consultation</h2>
              <p className="text-foreground/70 mt-1 xl:mt-0 xl:first-letter:pl-24 xl:text-2xl xl:flex-1 xl:max-w-[40ch]">Take the first step towards securing your financial future. Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            <div className="mt-6 xl:mt-16">
              <form>
                <div className="grid gap-5 xl:grid-cols-4">
                  <div className="space-y-1">
                    <Label>your name</Label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div className="space-y-1">
                    <Label>email</Label>
                    <Input placeholder="Your email" required />
                  </div>
                  <div className="space-y-1">
                    <Label>phone number</Label>
                    <Input placeholder="Your phone number" required />
                  </div>
                  <div className="space-y-1">
                    <Label>age</Label>
                    <Input placeholder="Your age" required defaultValue={32} type="number" />
                  </div>
                  <div className="space-y-1">
                    <Label>preferred contact method</Label>
                    <Select required>
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
                    <Select required>
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
                    <Select required>
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
                    <Textarea className="placeholder:text-dark-green/75" placeholder="Your message" rows={4} />
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-6 xl:mt-14 xl:flex-row xl:gap-10">
                  <div className="flex space-x-3 items-center">
                    <Checkbox id="privacy" />
                    <Label className="[text-transform:none] text-base" htmlFor="privacy">I agree to the <Link className="text-green" href="/privacy">Privacy Policy</Link></Label>
                  </div>
                  <Button className="xl:order-first group" size="lg"><span className="h-0.5 w-2.5 bg-dark-green group-hover:w-6 transition-all duration-300"></span><span className="ml-3">Get Free Consultation</span></Button>
                </div>
              </form>
            </div>
          </Container>
        </div>
        <div className="pt-8 xl:pt-16 dark">
          <Container>
            <div className="flex flex-col items-center justify-center gap-14 xl:gap-24">
              <div className="flex flex-col items-center justify-center gap-14 xl:w-full xl:items-start xl:flex-row xl:justify-between">
                <div className="xl:max-w-[500px]">
                  <div className="flex space-x-[15px] items-center justify-center xl:justify-start">
                    <Logo className="size-[76px]" />
                    <LogoText className="w-[135px] h-auto text-foreground" />
                  </div>
                  <p className="text-foreground mt-3 text-center xl:text-left text-pretty">Empowering entrepreneurs with comprehensive financial planning and investment management solutions.</p>
                  <div className="mt-7 flex space-x-[18px] justify-center xl:justify-start">
                    <a aria-label="LinkedIn" target="_blank" href="https://www.linkedin.com/in/connor-low-0223b623a/">
                      <Linkedin className="size-[18px]" />
                    </a>
                    <a aria-label="X formerly known as Twitter" target="_blank" href="https://x.com/clow0919">
                      <X className="size-[18px]" />
                    </a>
                  </div>
                </div>
                <div className="text-center flex flex-col items-center xl:items-start">
                  <h3 className="text-foreground text-lg font-medium">Contact</h3>
                  <div className="mt-6 text-left space-y-4">
                    <a className="flex space-x-2.5 items-center" href="mailto:contact@iarannwealth.com">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3402 4.46187C19.2587 3.91742 18.9849 3.42016 18.5683 3.06024C18.1518 2.70032 17.62 2.50156 17.0695 2.5H2.93078C2.38027 2.50156 1.84854 2.70032 1.43198 3.06024C1.01541 3.42016 0.741595 3.91742 0.660156 4.46187L10.0002 10.5056L19.3402 4.46187Z" fill="#18AA68" />
                        <path d="M10.3394 11.7746C10.2383 11.84 10.1204 11.8748 10 11.8748C9.87959 11.8748 9.76174 11.84 9.66062 11.7746L0.625 5.92836V15.194C0.625662 15.8053 0.868788 16.3913 1.30103 16.8236C1.73328 17.2558 2.31934 17.4989 2.93062 17.4996H17.0694C17.6807 17.4989 18.2667 17.2558 18.699 16.8236C19.1312 16.3913 19.3743 15.8053 19.375 15.194V5.92773L10.3394 11.7746Z" fill="#18AA68" />
                      </svg>
                      <span className="text-foreground">contact@iarannwealth.com</span>
                    </a>
                    <div className="flex space-x-2.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0635 2.64274C14.3385 1.95357 13.4802 1.41997 12.5413 1.07474C11.6025 0.729512 10.6029 0.579946 9.60416 0.635239C7.7092 0.752587 5.93136 1.59204 4.63671 2.98075C3.34206 4.36946 2.62916 6.20172 2.64478 8.10024C2.67431 9.97146 3.41876 11.7605 4.72541 13.1002C5.78438 14.2019 6.77082 15.371 7.67853 16.6002C8.08228 17.1334 8.47166 17.6734 8.85728 18.2177L9.49166 19.1134C9.54942 19.1948 9.62584 19.2611 9.71451 19.3069C9.80319 19.3527 9.90154 19.3766 10.0013 19.3766C10.1012 19.3766 10.1995 19.3527 10.2882 19.3069C10.3769 19.2611 10.4533 19.1948 10.511 19.1134L11.4435 17.8009C11.7285 17.3977 12.0229 16.999 12.3317 16.6059C13.3573 15.2746 14.4504 14.0315 15.4804 12.8859C16.7598 11.461 17.4321 9.5929 17.3543 7.67956C17.2764 5.76621 16.4544 3.95891 15.0635 2.64274ZM10.001 11.2496C9.38297 11.2496 8.77878 11.0663 8.26488 10.723C7.75097 10.3796 7.35043 9.89152 7.11391 9.3205C6.87739 8.74948 6.8155 8.12115 6.93608 7.51496C7.05666 6.90877 7.35429 6.35194 7.79132 5.91491C8.22836 5.47787 8.78519 5.18024 9.39138 5.05966C9.99757 4.93908 10.6259 5.00097 11.1969 5.23749C11.7679 5.47401 12.256 5.87455 12.5994 6.38846C12.9428 6.90236 13.126 7.50655 13.126 8.12461C13.125 8.95311 12.7955 9.74739 12.2096 10.3332C11.6238 10.9191 10.8295 11.2486 10.001 11.2496Z" fill="#18AA68" />
                        <path d="M10 10C11.0355 10 11.875 9.16053 11.875 8.125C11.875 7.08947 11.0355 6.25 10 6.25C8.96447 6.25 8.125 7.08947 8.125 8.125C8.125 9.16053 8.96447 10 10 10Z" fill="#18AA68" />
                      </svg>
                      <p className="text-foreground">
                        3604 Shannon Rd STE 105 <br />
                        Durham, NC 27707
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4 text-foreground xl:flex xl:justify-between xl:space-y-0 xl:w-full">
                <Link className="block" href="/privacy">Privacy Policy</Link>
                <p>© {new Date().getFullYear()} Iarann Wealth. All rights reserved.</p>
                <Link className="block" href="/terms">Terms and Conditions</Link>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}


const services = [
  {
    id: 1,
    title: "Cash Flow Planning",
    content: "Optimize your income and expenses with our comprehensive cash flow planning. We help you understand and manage your money flow for financial stability and growth.",
    icon: CashFlowPlanning
  },
  {
    id: 2,
    title: "Investment Planning",
    content: "Create a robust investment strategy tailored to your goals and risk tolerance. We focus on diversification, tax efficiency, and long-term growth to help you build and preserve wealth.",
    icon: InvestmentPlanning
  },
  {
    id: 3,
    title: "Education Planning",
    content: "Plan for your children's future education with smart savings and investment strategies. We help you navigate college funding options and create a sustainable education savings plan.",
    icon: EducationPlanning
  },
  {
    id: 4,
    title: "Insurance Planning",
    content: "Protect your family and assets with comprehensive insurance planning. We assess your needs and recommend appropriate coverage to safeguard your financial future.",
    icon: InsurancePlanning
  },
  {
    id: 5,
    title: "Debt Payoff Planning",
    content: "Take control of your debt with strategic payoff planning. We help you create an effective debt reduction strategy while balancing other financial priorities.",
    icon: DebtPayoffPlanning
  },
  {
    id: 6,
    title: "Risk Management Analysis",
    content: "Identify and mitigate financial risks with our comprehensive analysis. We help you understand and prepare for potential financial challenges.",
    icon: RiskManagementAnalysis
  },
  {
    id: 7,
    title: "Retirement Planning",
    content: "Build a secure retirement with our comprehensive planning services. We help you create a strategy that ensures financial independence and peace of mind in your golden years.",
    icon: RetirementPlanning
  },
  {
    id: 8,
    title: "Real Estate Analysis",
    content: "Make informed real estate decisions with our expert analysis. We evaluate property investments, financing options, and market conditions to optimize your real estate strategy.",
    icon: RealEstateAnalysis
  },
  {
    id: 9,
    title: "Major Life Decision Planning",
    content: "Navigate life's big decisions with confidence. We help you analyze and plan for major life changes while maintaining financial stability.",
    icon: MajorLifestyleDecisionPlanning
  },
  {
    id: 10,
    title: "Estate Planning",
    content: "Secure your legacy with comprehensive estate planning. We help you structure your estate to minimize taxes and ensure your wishes are carried out effectively.",
    icon: EstatePlanning
  },
  {
    id: 11,
    title: "Exit Planning",
    content: "Create a successful exit strategy for your business. We help you maximize value and ensure a smooth transition while protecting your interests.",
    icon: ExitPlanning
  },
  {
    id: 12,
    title: "Asset Protection",
    content: "Safeguard your wealth with strategic asset protection planning. We help you implement legal strategies to protect your assets from potential risks and claims.",
    icon: AssetProtection
  },
]

const whoWeServe = [
  {
    id: 1,
    title: "Business Owners",
    content: "Entrepreneurs and business owners looking to optimize their tax strategy while scaling their companies.",
    icon: BusinessOwners
  },
  {
    id: 2,
    title: "High Income Earners",
    content: "Medical professionals, lawyers, and executives seeking comprehensive wealth management and tax optimization strategies.",
    icon: HighIncomeEarners
  },
  {
    id: 3,
    title: "Tech Professionals",
    content: "Software engineers, IT specialists, and tech leaders seeking guidance on RSUs, stock options, and long-term wealth building strategies.",
    icon: TechProfessionals
  },
  {
    id: 4,
    title: "Individuals & Families",
    content: "Whether you're just starting your financial journey or planning for a major life event, we provide personalized guidance to help you achieve your goals.",
    icon: IndividualsAndFamilies
  },
  {
    id: 5,
    title: "Pre-Retirees & Retirees",
    content: "We help you confidently transition into retirement and create a sustainable income plan to enjoy your golden years.",
    icon: Retirees
  },
  {
    id: 6,
    title: "You!",
    content: "No matter your financial situation or stage in life, we're here to help you achieve financial freedom and security. Your goals are our priority.",
    icon: You
  }
]