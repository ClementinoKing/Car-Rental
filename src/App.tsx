import {
  Bell,
  BarChart3,
  CalendarDays,
  CalendarCheck2,
  CarFront,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  LayoutDashboard,
  KeyRound,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Moon,
  Route as RouteIcon,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  TrendingUp,
  UserRound,
  Users,
  X,
} from "lucide-react"
import { FormEvent, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Vehicles", icon: CarFront, to: "/dashboard/vehicles" },
  { label: "Tracking", icon: RouteIcon, to: "/dashboard/tracking" },
  { label: "Bookings", icon: CalendarCheck2, to: "/dashboard/bookings" },
  { label: "Customers", icon: Users, to: "/dashboard/customers" },
  { label: "Reports", icon: BarChart3, to: "/dashboard/reports" },
  { label: "Settings", icon: SlidersHorizontal, to: "/dashboard/settings" },
]

const trackedCars = [
  {
    vehicle: "Audi R8 Coupe",
    plate: "MZ-2048",
    location: "Lilongwe CBD",
    speed: "42 km/h",
    status: "Moving",
    driver: "Peter Banda",
    fuel: "74%",
    lastUpdate: "2 min ago",
    lat: -13.9626,
    lng: 33.7741,
  },
  {
    vehicle: "Bentley Flying Spur",
    plate: "BT-9112",
    location: "Mzuzu Depot",
    speed: "0 km/h",
    status: "Parked",
    driver: "James Phiri",
    fuel: "61%",
    lastUpdate: "5 min ago",
    lat: -11.4582,
    lng: 34.0151,
  },
  {
    vehicle: "Toyota Land Cruiser",
    plate: "KR-3321",
    location: "Blantyre Highway",
    speed: "67 km/h",
    status: "Moving",
    driver: "Loveness Kaluwa",
    fuel: "52%",
    lastUpdate: "1 min ago",
    lat: -15.7861,
    lng: 35.0058,
  },
  {
    vehicle: "Mercedes C-Class",
    plate: "MC-5620",
    location: "Zomba Branch",
    speed: "0 km/h",
    status: "Idle",
    driver: "Tapiwa Mvula",
    fuel: "89%",
    lastUpdate: "7 min ago",
    lat: -15.3888,
    lng: 35.3188,
  },
]

function LoginPage() {
  const navigate = useNavigate()

  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_35%)]" />

      <div className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-white/20 bg-neutral-900/90 shadow-2xl backdrop-blur">
        <div className="grid min-h-[620px] md:grid-cols-2">
          <section className="hidden flex-col justify-between border-r border-white/20 bg-white p-10 text-black md:flex">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-black text-white shadow">
              <CarFront className="h-6 w-6" />
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-widest text-black/70">
                Car Rental System
              </p>
              <h1 className="text-4xl font-bold leading-tight">
                Keep your fleet, bookings, and customers in one place.
              </h1>
              <p className="text-sm text-black/75">
                Sign in to manage vehicle availability and daily operations.
              </p>
            </div>
          </section>

          <section className="flex items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-sm space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-neutral-400">Welcome back</p>
                <h2 className="text-2xl font-semibold text-white">Sign in to your account</h2>
              </div>

              <form className="space-y-4" onSubmit={onLogin}>
                <label className="block space-y-2">
                  <span className="text-sm text-neutral-300">Email</span>
                  <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-black px-3">
                    <Mail className="h-4 w-4 text-neutral-400" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
                      required
                    />
                  </div>
                </label>

                <label className="block space-y-2">
                  <span className="text-sm text-neutral-300">Password</span>
                  <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-black px-3">
                    <KeyRound className="h-4 w-4 text-neutral-400" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
                      required
                    />
                  </div>
                </label>

                <Button
                  type="submit"
                  className="h-11 w-full border border-white/25 bg-white text-black hover:bg-neutral-200"
                >
                  Sign In
                </Button>
              </form>

              <p className="text-center text-sm text-neutral-400">
                Forgot password?{" "}
                <button className="text-white underline underline-offset-4 hover:text-neutral-300">
                  Reset it
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function DashboardHomePage() {
  const summaryCards = [
    { label: "Total Vehicles", value: "124", note: "+8 this month" },
    { label: "Active Bookings", value: "38", note: "12 due today" },
    { label: "Available Cars", value: "71", note: "57.3% availability" },
    { label: "Monthly Revenue", value: "MWK 42,860,000", note: "+14.2% growth" },
  ]

  const upcomingBookings = [
    { customer: "Liam Banda", vehicle: "Toyota Corolla", period: "Mar 6 - Mar 10", status: "Confirmed" },
    { customer: "Grace Phiri", vehicle: "Honda CR-V", period: "Mar 6 - Mar 8", status: "Pickup today" },
    { customer: "Noah Mbewe", vehicle: "Mazda Demio", period: "Mar 7 - Mar 11", status: "Pending" },
  ]

  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Dashboard Overview</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Monitor bookings, customers, and fleet health.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-10 items-center gap-2 rounded-md border border-black/10 bg-white px-3 dark:border-white/10 dark:bg-neutral-900">
            <Search className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <input
              className="w-44 bg-transparent text-sm outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
              placeholder="Search booking, customer..."
            />
          </div>
          <button className="flex h-10 items-center gap-2 rounded-md border border-black/10 bg-white px-3 text-sm font-medium hover:bg-neutral-100 dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <TrendingUp className="h-4 w-4" />
            Weekly Report
          </button>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <article key={card.label} className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{card.label}</p>
            <p className="mt-3 text-3xl font-semibold leading-none">{card.value}</p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{card.note}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-neutral-900">
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 dark:border-white/10">
            <h3 className="text-base font-semibold">Upcoming Bookings</h3>
            <button className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">View all</button>
          </div>
          <div className="divide-y divide-black/10 dark:divide-white/10">
            {upcomingBookings.map((booking) => (
              <div key={booking.customer} className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-medium">{booking.customer}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{booking.vehicle}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{booking.period}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{booking.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
            <h3 className="text-base font-semibold">Fleet Utilization</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Current operational utilization across all branches.</p>
            <div className="mt-4 h-3 rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div className="h-3 w-[72%] rounded-full bg-black dark:bg-white" />
            </div>
            <p className="mt-2 text-sm font-medium">72% utilized</p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
            <h3 className="text-base font-semibold">Pending Tasks</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>3 vehicles pending maintenance check</li>
              <li>2 customer verifications awaiting approval</li>
              <li>5 invoices pending confirmation</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

function VehiclesPage() {
  const initialVehicles = [
    {
      name: "Audi R8 Coupe",
      style: "Audi",
      type: "Auto",
      color: "Green",
      status: "Available",
      pricePerDay: "MWK 285,000/day",
      image:
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Bentley Flying Spur",
      style: "Bentley",
      type: "Petrol",
      color: "Blue",
      status: "Booked",
      pricePerDay: "MWK 358,000/day",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Toyota Land Cruiser",
      style: "Toyota",
      type: "Auto",
      color: "Black",
      status: "Available",
      pricePerDay: "MWK 190,000/day",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Mercedes C-Class",
      style: "Mercedes",
      type: "Petrol",
      color: "Silver",
      status: "Maintenance",
      pricePerDay: "MWK 240,000/day",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80",
    },
  ]

  const [vehicles, setVehicles] = useState(initialVehicles)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    style: "",
    year: "",
    type: "Auto",
    transmission: "Automatic",
    seats: "",
    vin: "",
    color: "",
    plate: "",
    status: "Available",
    price: "",
    mileage: "",
    branch: "",
    image: "",
  })
  const [isBrandOpen, setIsBrandOpen] = useState(false)
  const [isColorOpen, setIsColorOpen] = useState(false)
  const [brandMenuPos, setBrandMenuPos] = useState<{ top: number; left: number; width: number } | null>(null)
  const [colorMenuPos, setColorMenuPos] = useState<{ top: number; left: number; width: number } | null>(null)
  const brandTriggerRef = useRef<HTMLButtonElement | null>(null)
  const colorTriggerRef = useRef<HTMLButtonElement | null>(null)
  const brandMenuRef = useRef<HTMLDivElement | null>(null)
  const colorMenuRef = useRef<HTMLDivElement | null>(null)
  const steps = [
    { id: 1, label: "Vehicle Details" },
    { id: 2, label: "Pricing & Status" },
    { id: 3, label: "Review & Create" },
  ]
  const brandOptions = ["Audi", "Bentley", "Toyota", "Mercedes", "BMW", "Nissan", "Mazda", "Ford", "Volkswagen"]
  const colorOptions = [
    { label: "Black", dotClass: "bg-black" },
    { label: "White", dotClass: "bg-white border border-black/20" },
    { label: "Silver", dotClass: "bg-neutral-400" },
    { label: "Blue", dotClass: "bg-blue-500" },
    { label: "Red", dotClass: "bg-red-500" },
    { label: "Green", dotClass: "bg-emerald-500" },
    { label: "Grey", dotClass: "bg-neutral-500" },
    { label: "Brown", dotClass: "bg-amber-700" },
  ]
  const selectedColor = colorOptions.find((item) => item.label === formData.color)
  const stepProgress = (step / steps.length) * 100
  const isFirstStep = step === 1
  const isLastStep = step === steps.length

  const closeModal = () => {
    setIsModalOpen(false)
    setStep(1)
    setFormData({
      name: "",
      style: "",
      year: "",
      type: "Auto",
      transmission: "Automatic",
      seats: "",
      vin: "",
      color: "",
      plate: "",
      status: "Available",
      price: "",
      mileage: "",
      branch: "",
      image: "",
    })
    setIsBrandOpen(false)
    setIsColorOpen(false)
    setBrandMenuPos(null)
    setColorMenuPos(null)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        isBrandOpen &&
        brandTriggerRef.current &&
        !brandTriggerRef.current.contains(target) &&
        brandMenuRef.current &&
        !brandMenuRef.current.contains(target)
      ) {
        setIsBrandOpen(false)
      }
      if (
        isColorOpen &&
        colorTriggerRef.current &&
        !colorTriggerRef.current.contains(target) &&
        colorMenuRef.current &&
        !colorMenuRef.current.contains(target)
      ) {
        setIsColorOpen(false)
      }
    }

    const handleViewportChange = () => {
      setIsBrandOpen(false)
      setIsColorOpen(false)
    }

    document.addEventListener("mousedown", handleOutsideClick)
    window.addEventListener("resize", handleViewportChange)
    window.addEventListener("scroll", handleViewportChange, true)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      window.removeEventListener("resize", handleViewportChange)
      window.removeEventListener("scroll", handleViewportChange, true)
    }
  }, [isBrandOpen, isColorOpen])

  const nextStep = () => {
    if (step < 3) setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1)
  }

  const createVehicle = () => {
    const formattedPrice = Number(formData.price || 0).toLocaleString()
    setVehicles((prev) => [
      {
        name: formData.name || "New Vehicle",
        style: formData.style || "Unknown",
        type: formData.type,
        color: formData.color || "Unknown",
        status: formData.status,
        pricePerDay: `MWK ${formattedPrice}/day`,
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80",
      },
      ...prev,
    ])
    closeModal()
  }

  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Vehicles</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Browse and manage your fleet with card-based inventory.</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="h-10 rounded-md border border-black bg-black px-5 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Add Vehicle
        </Button>
      </div>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => (
          <article
            key={vehicle.name}
            className="overflow-hidden rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-neutral-900"
          >
            <div className="h-44 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    vehicle.status === "Available"
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : vehicle.status === "Booked"
                        ? "bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white"
                        : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  }`}
                >
                  {vehicle.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <p>
                  <span className="block text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">Brand</span>
                  {vehicle.style}
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">Type</span>
                  {vehicle.type}
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">Color</span>
                  {vehicle.color}
                </p>
              </div>
              <p className="text-xl font-semibold">{vehicle.pricePerDay}</p>
            </div>
          </article>
        ))}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-900">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 dark:border-white/10">
              <div>
                <h3 className="text-lg font-semibold">Add Vehicle</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Create a new fleet record</p>
              </div>
              <button
                onClick={closeModal}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10 hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="border-b border-black/10 bg-neutral-50/80 px-5 py-4 dark:border-white/10 dark:bg-neutral-800/30">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-medium">
                  Step {step} of {steps.length}: {steps[step - 1]?.label}
                </p>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {Math.round(stepProgress)}% complete
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div
                  className="h-full bg-black transition-all duration-300 ease-out dark:bg-white"
                  style={{ width: `${stepProgress}%` }}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {steps.map((stepItem, index) => (
                  <span
                    key={stepItem.id}
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${
                      index + 1 < step
                        ? "border-black/20 bg-black/10 text-black dark:border-white/20 dark:bg-white/15 dark:text-white"
                        : index + 1 === step
                          ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                          : "border-black/15 bg-white text-neutral-600 dark:border-white/15 dark:bg-neutral-900 dark:text-neutral-300"
                    }`}
                  >
                    {index + 1 < step ? "Done" : `Step ${index + 1}`} · {stepItem.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {step === 1 && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Vehicle Name</span>
                    <input
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. Audi R8 Coupe"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <div className="relative space-y-1.5">
                    <span className="text-sm font-medium">Brand</span>
                    <button
                      ref={brandTriggerRef}
                      type="button"
                      onClick={() => {
                        if (!isBrandOpen && brandTriggerRef.current) {
                          const rect = brandTriggerRef.current.getBoundingClientRect()
                          setBrandMenuPos({ top: rect.bottom + 8, left: rect.left, width: rect.width })
                        }
                        setIsBrandOpen((prev) => !prev)
                        setIsColorOpen(false)
                      }}
                      className="flex h-10 w-full items-center justify-between rounded-md border border-black/15 bg-white px-3 text-sm dark:border-white/15 dark:bg-neutral-900"
                    >
                      <span>{formData.style || "Select brand"}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Model Year</span>
                    <input
                      type="number"
                      value={formData.year}
                      onChange={(e) => setFormData((prev) => ({ ...prev, year: e.target.value }))}
                      placeholder="e.g. 2024"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Fuel Type</span>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData((prev) => ({ ...prev, type: e.target.value }))}
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    >
                      <option>Auto</option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                      <option>Electric</option>
                    </select>
                  </label>
                  <div className="relative space-y-1.5">
                    <span className="text-sm font-medium">Color</span>
                    <button
                      ref={colorTriggerRef}
                      type="button"
                      onClick={() => {
                        if (!isColorOpen && colorTriggerRef.current) {
                          const rect = colorTriggerRef.current.getBoundingClientRect()
                          setColorMenuPos({ top: rect.bottom + 8, left: rect.left, width: rect.width })
                        }
                        setIsColorOpen((prev) => !prev)
                        setIsBrandOpen(false)
                      }}
                      className="flex h-10 w-full items-center justify-between rounded-md border border-black/15 bg-white px-3 text-sm dark:border-white/15 dark:bg-neutral-900"
                    >
                      <span className="flex items-center gap-2">
                        <span className={`h-3 w-3 rounded-full ${selectedColor?.dotClass ?? "bg-neutral-300"}`} />
                        <span>{formData.color || "Select color"}</span>
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Transmission</span>
                    <select
                      value={formData.transmission}
                      onChange={(e) => setFormData((prev) => ({ ...prev, transmission: e.target.value }))}
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    >
                      <option>Automatic</option>
                      <option>Manual</option>
                    </select>
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Seats</span>
                    <input
                      type="number"
                      value={formData.seats}
                      onChange={(e) => setFormData((prev) => ({ ...prev, seats: e.target.value }))}
                      placeholder="e.g. 5"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5 sm:col-span-2 lg:col-span-3">
                    <span className="text-sm font-medium">VIN / Chassis Number</span>
                    <input
                      value={formData.vin}
                      onChange={(e) => setFormData((prev) => ({ ...prev, vin: e.target.value }))}
                      placeholder="e.g. WAUZZZ4G5DN012345"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Plate Number</span>
                    <input
                      value={formData.plate}
                      onChange={(e) => setFormData((prev) => ({ ...prev, plate: e.target.value }))}
                      placeholder="e.g. MZ 2048"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Status</span>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    >
                      <option>Available</option>
                      <option>Booked</option>
                      <option>Maintenance</option>
                    </select>
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Price Per Day (MWK)</span>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                      placeholder="e.g. 250000"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Current Mileage (km)</span>
                    <input
                      type="number"
                      value={formData.mileage}
                      onChange={(e) => setFormData((prev) => ({ ...prev, mileage: e.target.value }))}
                      placeholder="e.g. 35000"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Branch Location</span>
                    <input
                      value={formData.branch}
                      onChange={(e) => setFormData((prev) => ({ ...prev, branch: e.target.value }))}
                      placeholder="e.g. Lilongwe HQ"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Image URL</span>
                    <input
                      value={formData.image}
                      onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                      placeholder="https://..."
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 rounded-md border border-black/10 bg-neutral-50 p-4 dark:border-white/10 dark:bg-neutral-800/40">
                  <h4 className="text-base font-semibold">Review Vehicle</h4>
                  <div className="grid gap-3 text-sm sm:grid-cols-2">
                    <p><span className="text-neutral-500 dark:text-neutral-400">Name:</span> {formData.name || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Brand:</span> {formData.style || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Model Year:</span> {formData.year || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Fuel Type:</span> {formData.type}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Color:</span> {formData.color || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Transmission:</span> {formData.transmission}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Seats:</span> {formData.seats || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">VIN:</span> {formData.vin || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Plate:</span> {formData.plate || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Status:</span> {formData.status}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Price:</span> {formData.price ? `MWK ${Number(formData.price).toLocaleString()}/day` : "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Mileage:</span> {formData.mileage ? `${Number(formData.mileage).toLocaleString()} km` : "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Branch:</span> {formData.branch || "N/A"}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 border-t border-black/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900">
              <div className="flex w-full gap-2 sm:w-auto">
                <Button
                  variant="outline"
                  onClick={closeModal}
                  className="h-10 w-full rounded-md border-black/20 sm:w-auto dark:border-white/20"
                >
                  Cancel
                </Button>
              </div>
              <div className="flex w-full gap-2 sm:w-auto">
                {!isFirstStep && (
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="h-10 w-full rounded-md border-black/20 sm:w-auto dark:border-white/20"
                  >
                    Previous
                  </Button>
                )}
                {!isLastStep ? (
                  <Button
                    onClick={nextStep}
                    className="h-10 w-full rounded-md border border-black bg-black text-white hover:bg-neutral-800 sm:w-auto dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={createVehicle}
                    className="h-10 w-full rounded-md border border-black bg-black text-white hover:bg-neutral-800 sm:w-auto dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                  >
                    Create Vehicle
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {isBrandOpen && brandMenuPos &&
        createPortal(
          <div
            ref={brandMenuRef}
            style={{ top: brandMenuPos.top, left: brandMenuPos.left, width: brandMenuPos.width }}
            className="fixed z-[80] rounded-md border border-black/15 bg-white p-1 shadow-lg dark:border-white/15 dark:bg-neutral-900"
          >
            {brandOptions.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, style: brand }))
                  setIsBrandOpen(false)
                }}
                className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {brand}
              </button>
            ))}
          </div>,
          document.body,
        )}
      {isColorOpen && colorMenuPos &&
        createPortal(
          <div
            ref={colorMenuRef}
            style={{ top: colorMenuPos.top, left: colorMenuPos.left, width: colorMenuPos.width }}
            className="fixed z-[80] rounded-md border border-black/15 bg-white p-1 shadow-lg dark:border-white/15 dark:bg-neutral-900"
          >
            {colorOptions.map((color) => (
              <button
                key={color.label}
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, color: color.label }))
                  setIsColorOpen(false)
                }}
                className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <span className={`h-3 w-3 rounded-full ${color.dotClass}`} />
                <span>{color.label}</span>
              </button>
            ))}
          </div>,
          document.body,
        )}
    </main>
  )
}

function BookingsPage() {
  const bookingStats = [
    { label: "Total Bookings", value: "184", note: "This month" },
    { label: "Active Rentals", value: "38", note: "Currently on road" },
    { label: "Pending Pickup", value: "12", note: "Due today" },
    { label: "Revenue", value: "MWK 26,400,000", note: "Current cycle" },
  ]

  const bookings = [
    {
      id: "BK-1092",
      customer: "Liam Banda",
      vehicle: "Toyota Corolla",
      pickupDate: "Mar 6, 2026",
      pickupTime: "08:30",
      dropoffDate: "Mar 10, 2026",
      dropoffTime: "17:00",
      pickupLocation: "Lilongwe Branch",
      dropoffLocation: "Blantyre Branch",
      total: "MWK 1,140,000",
      payment: "Paid",
      status: "Confirmed",
    },
    {
      id: "BK-1093",
      customer: "Grace Phiri",
      vehicle: "Honda CR-V",
      pickupDate: "Mar 6, 2026",
      pickupTime: "10:00",
      dropoffDate: "Mar 8, 2026",
      dropoffTime: "12:00",
      pickupLocation: "Mzuzu Depot",
      dropoffLocation: "Mzuzu Depot",
      total: "MWK 620,000",
      payment: "Partial",
      status: "Pickup Today",
    },
    {
      id: "BK-1094",
      customer: "Noah Mbewe",
      vehicle: "Mazda Demio",
      pickupDate: "Mar 7, 2026",
      pickupTime: "09:00",
      dropoffDate: "Mar 11, 2026",
      dropoffTime: "16:30",
      pickupLocation: "Lilongwe Branch",
      dropoffLocation: "Lilongwe Branch",
      total: "MWK 800,000",
      payment: "Pending",
      status: "Pending",
    },
    {
      id: "BK-1095",
      customer: "Tadala Kandoje",
      vehicle: "Mercedes C-Class",
      pickupDate: "Mar 5, 2026",
      pickupTime: "07:30",
      dropoffDate: "Mar 9, 2026",
      dropoffTime: "15:00",
      pickupLocation: "Zomba Branch",
      dropoffLocation: "Lilongwe Branch",
      total: "MWK 1,480,000",
      payment: "Paid",
      status: "Active",
    },
  ]

  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Bookings</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Manage reservations, pickup/dropoff schedules, and payment statuses.
          </p>
        </div>
        <Button className="h-10 rounded-md border border-black bg-black px-4 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200">
          Create Booking
        </Button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {bookingStats.map((stat) => (
          <article key={stat.label} className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold leading-none">{stat.value}</p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{stat.note}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-neutral-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 px-4 py-4 dark:border-white/10 sm:px-5">
          <div className="flex w-full max-w-md items-center gap-2 rounded-md border border-black/10 bg-white px-3 dark:border-white/10 dark:bg-neutral-900">
            <Search className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <input
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
              placeholder="Search by booking, customer, vehicle..."
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-md border border-black/15 px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-white/15 dark:hover:bg-neutral-800">
              Status: All
            </button>
            <button className="rounded-md border border-black/15 px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-white/15 dark:hover:bg-neutral-800">
              Payment: All
            </button>
          </div>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1100px] text-sm">
            <thead>
              <tr className="border-b border-black/10 text-left dark:border-white/10">
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Booking</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Customer & Vehicle</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Schedule</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Route</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Amount</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Payment</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-black/10 align-top dark:border-white/10">
                  <td className="px-5 py-4">
                    <p className="font-semibold">{booking.id}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Rental booking</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium">{booking.customer}</p>
                    <p className="text-neutral-600 dark:text-neutral-400">{booking.vehicle}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="inline-flex items-center gap-1 text-neutral-700 dark:text-neutral-300">
                      <CalendarDays className="h-4 w-4" />
                      {booking.pickupDate} - {booking.dropoffDate}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                      <Clock3 className="h-4 w-4" />
                      {booking.pickupTime} - {booking.dropoffTime}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="inline-flex items-center gap-1 text-neutral-700 dark:text-neutral-300">
                      <MapPin className="h-4 w-4" />
                      {booking.pickupLocation}
                    </p>
                    <p className="mt-1 text-neutral-500 dark:text-neutral-400">to {booking.dropoffLocation}</p>
                  </td>
                  <td className="px-5 py-4 font-semibold">{booking.total}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        booking.payment === "Paid"
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : booking.payment === "Partial"
                            ? "bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white"
                            : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      }`}
                    >
                      {booking.payment}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        booking.status === "Confirmed" || booking.status === "Active"
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : booking.status === "Pickup Today"
                            ? "bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white"
                            : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 p-4 lg:hidden">
          {bookings.map((booking) => (
            <article key={booking.id} className="rounded-md border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold">{booking.id}</p>
                <span className="rounded-full bg-black px-2.5 py-1 text-xs font-medium text-white dark:bg-white dark:text-black">
                  {booking.status}
                </span>
              </div>
              <p className="mt-2 font-medium">{booking.customer}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{booking.vehicle}</p>
              <div className="mt-3 grid gap-1 text-sm">
                <p>{booking.pickupDate} {booking.pickupTime}</p>
                <p>{booking.pickupLocation} to {booking.dropoffLocation}</p>
                <p className="font-semibold">{booking.total}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function ClientsPage() {
  const initialClients = [
    {
      name: "Liam Banda",
      phone: "+265 991 222 431",
      email: "liam.banda@example.com",
      totalBookings: 14,
      activeRental: "Yes",
      tier: "Gold",
      kyc: "Verified",
    },
    {
      name: "Grace Phiri",
      phone: "+265 999 120 883",
      email: "grace.phiri@example.com",
      totalBookings: 8,
      activeRental: "Yes",
      tier: "Silver",
      kyc: "Verified",
    },
    {
      name: "Noah Mbewe",
      phone: "+265 881 445 992",
      email: "noah.mbewe@example.com",
      totalBookings: 5,
      activeRental: "No",
      tier: "Standard",
      kyc: "Pending",
    },
    {
      name: "Tadala Kandoje",
      phone: "+265 999 004 222",
      email: "tadala.k@example.com",
      totalBookings: 11,
      activeRental: "No",
      tier: "Gold",
      kyc: "Verified",
    },
  ]
  const [clients, setClients] = useState(initialClients)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    idNumber: "",
    licenseNumber: "",
    idDocumentName: "",
    licenseDocumentName: "",
    address: "",
    city: "",
    tier: "Standard",
    kyc: "Pending",
  })
  const steps = [
    { id: 1, label: "Basic Information" },
    { id: 2, label: "Identification" },
    { id: 3, label: "Profile Details" },
    { id: 4, label: "Review & Create" },
  ]
  const stepProgress = (step / steps.length) * 100
  const isFirstStep = step === 1
  const isLastStep = step === steps.length

  const closeModal = () => {
    setIsModalOpen(false)
    setStep(1)
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      idNumber: "",
      licenseNumber: "",
      idDocumentName: "",
      licenseDocumentName: "",
      address: "",
      city: "",
      tier: "Standard",
      kyc: "Pending",
    })
  }

  const nextStep = () => {
    if (step < steps.length) setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1)
  }

  const createClient = () => {
    setClients((prev) => [
      {
        name: formData.fullName || "New Client",
        phone: formData.phone || "N/A",
        email: formData.email || "N/A",
        totalBookings: 0,
        activeRental: "No",
        tier: formData.tier,
        kyc: formData.kyc,
      },
      ...prev,
    ])
    closeModal()
  }

  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Clients</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Customer profiles, verification status, and rental activity.
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="h-10 rounded-md border border-black bg-black px-4 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Add Client
        </Button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Total Clients</p>
          <p className="mt-2 text-3xl font-semibold">1,248</p>
        </article>
        <article className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Verified KYC</p>
          <p className="mt-2 text-3xl font-semibold">1,101</p>
        </article>
        <article className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Active Renters</p>
          <p className="mt-2 text-3xl font-semibold">219</p>
        </article>
        <article className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Retention</p>
          <p className="mt-2 text-3xl font-semibold">86%</p>
        </article>
      </section>

      <section className="mt-6 rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-neutral-900">
        <div className="border-b border-black/10 px-5 py-4 dark:border-white/10">
          <h3 className="text-base font-semibold">Client Directory</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="border-b border-black/10 text-left dark:border-white/10">
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Client</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Contact</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Bookings</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Active Rental</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Tier</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">KYC</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.email} className="border-b border-black/10 dark:border-white/10">
                  <td className="px-5 py-4">
                    <p className="font-medium">{client.name}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p>{client.phone}</p>
                    <p className="text-neutral-600 dark:text-neutral-400">{client.email}</p>
                  </td>
                  <td className="px-5 py-4 font-medium">{client.totalBookings}</td>
                  <td className="px-5 py-4">{client.activeRental}</td>
                  <td className="px-5 py-4">{client.tier}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        client.kyc === "Verified"
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      }`}
                    >
                      {client.kyc}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-900">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 dark:border-white/10">
              <div>
                <h3 className="text-lg font-semibold">Create Client</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Add a new customer profile</p>
              </div>
              <button
                onClick={closeModal}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10 hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="border-b border-black/10 bg-neutral-50/80 px-5 py-4 dark:border-white/10 dark:bg-neutral-800/30">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-medium">
                  Step {step} of {steps.length}: {steps[step - 1]?.label}
                </p>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {Math.round(stepProgress)}% complete
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div
                  className="h-full bg-black transition-all duration-300 ease-out dark:bg-white"
                  style={{ width: `${stepProgress}%` }}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {steps.map((stepItem, index) => (
                  <span
                    key={stepItem.id}
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${
                      index + 1 < step
                        ? "border-black/20 bg-black/10 text-black dark:border-white/20 dark:bg-white/15 dark:text-white"
                        : index + 1 === step
                          ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                          : "border-black/15 bg-white text-neutral-600 dark:border-white/15 dark:bg-neutral-900 dark:text-neutral-300"
                    }`}
                  >
                    {index + 1 < step ? "Done" : `Step ${index + 1}`} · {stepItem.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {step === 1 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Full Name</span>
                    <input
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      placeholder="e.g. Chikondi Banda"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Phone Number</span>
                    <input
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+265 99 000 0000"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5 sm:col-span-2">
                    <span className="text-sm font-medium">Email</span>
                    <input
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="client@email.com"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">National ID</span>
                    <input
                      value={formData.idNumber}
                      onChange={(e) => setFormData((prev) => ({ ...prev, idNumber: e.target.value }))}
                      placeholder="e.g. 1234567890"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Driver License</span>
                    <input
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData((prev) => ({ ...prev, licenseNumber: e.target.value }))}
                      placeholder="e.g. MLW-DR-99812"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Upload National ID</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          idDocumentName: e.target.files?.[0]?.name ?? "",
                        }))
                      }
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-2 text-sm outline-none file:mr-3 file:rounded file:border-0 file:bg-black file:px-2 file:py-1.5 file:text-white dark:border-white/15 dark:bg-neutral-900 dark:file:bg-white dark:file:text-black"
                    />
                    {formData.idDocumentName && (
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{formData.idDocumentName}</p>
                    )}
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Upload Driver License</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          licenseDocumentName: e.target.files?.[0]?.name ?? "",
                        }))
                      }
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-2 text-sm outline-none file:mr-3 file:rounded file:border-0 file:bg-black file:px-2 file:py-1.5 file:text-white dark:border-white/15 dark:bg-neutral-900 dark:file:bg-white dark:file:text-black"
                    />
                    {formData.licenseDocumentName && (
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{formData.licenseDocumentName}</p>
                    )}
                  </label>
                </div>
              )}

              {step === 3 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5 sm:col-span-2">
                    <span className="text-sm font-medium">Address</span>
                    <input
                      value={formData.address}
                      onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                      placeholder="Street / Area"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">City</span>
                    <input
                      value={formData.city}
                      onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                      placeholder="e.g. Lilongwe"
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">Tier</span>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData((prev) => ({ ...prev, tier: e.target.value }))}
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    >
                      <option>Standard</option>
                      <option>Silver</option>
                      <option>Gold</option>
                    </select>
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-sm font-medium">KYC Status</span>
                    <select
                      value={formData.kyc}
                      onChange={(e) => setFormData((prev) => ({ ...prev, kyc: e.target.value }))}
                      className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none focus:border-black dark:border-white/15 dark:bg-neutral-900 dark:focus:border-white"
                    >
                      <option>Pending</option>
                      <option>Verified</option>
                    </select>
                  </label>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4 rounded-md border border-black/10 bg-neutral-50 p-4 dark:border-white/10 dark:bg-neutral-800/40">
                  <h4 className="text-base font-semibold">Review Client</h4>
                  <div className="grid gap-3 text-sm sm:grid-cols-2">
                    <p><span className="text-neutral-500 dark:text-neutral-400">Name:</span> {formData.fullName || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Phone:</span> {formData.phone || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Email:</span> {formData.email || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">National ID:</span> {formData.idNumber || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">License:</span> {formData.licenseNumber || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">National ID File:</span> {formData.idDocumentName || "Not uploaded"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">License File:</span> {formData.licenseDocumentName || "Not uploaded"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Address:</span> {formData.address || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">City:</span> {formData.city || "N/A"}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">Tier:</span> {formData.tier}</p>
                    <p><span className="text-neutral-500 dark:text-neutral-400">KYC:</span> {formData.kyc}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 border-t border-black/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900">
              <div className="flex w-full gap-2 sm:w-auto">
                <Button
                  variant="outline"
                  onClick={closeModal}
                  className="h-10 w-full rounded-md border-black/20 sm:w-auto dark:border-white/20"
                >
                  Cancel
                </Button>
              </div>
              <div className="flex w-full gap-2 sm:w-auto">
                {!isFirstStep && (
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="h-10 w-full rounded-md border-black/20 sm:w-auto dark:border-white/20"
                  >
                    Previous
                  </Button>
                )}
                {!isLastStep ? (
                  <Button
                    onClick={nextStep}
                    className="h-10 w-full rounded-md border border-black bg-black text-white hover:bg-neutral-800 sm:w-auto dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={createClient}
                    className="h-10 w-full rounded-md border border-black bg-black text-white hover:bg-neutral-800 sm:w-auto dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                  >
                    Create Client
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function ReportsPage() {
  const monthlyRevenuePoints = [11, 14, 12, 18, 20, 23, 22, 26, 28, 30, 34, 37]
  const branchUtilization = [
    { branch: "Lilongwe", value: 92 },
    { branch: "Blantyre", value: 84 },
    { branch: "Mzuzu", value: 73 },
    { branch: "Zomba", value: 67 },
  ]

  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Reports</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Performance analytics, revenue trends, and utilization intelligence.
          </p>
        </div>
        <Button className="h-10 rounded-md border border-black bg-black px-4 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200">
          Export PDF
        </Button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Monthly Revenue</p>
          <p className="mt-2 text-3xl font-semibold">MWK 42,860,000</p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">+14.2% vs last month</p>
        </article>
        <article className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Bookings Conversion</p>
          <p className="mt-2 text-3xl font-semibold">68%</p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Qualified inquiries to paid bookings</p>
        </article>
        <article className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Average Rental Days</p>
          <p className="mt-2 text-3xl font-semibold">4.8</p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Across all vehicle classes</p>
        </article>
        <article className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Fleet Availability</p>
          <p className="mt-2 text-3xl font-semibold">57%</p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Currently available vehicles</p>
        </article>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <article className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold">Revenue Trend (MWK Millions)</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Last 12 months</span>
          </div>
          <div className="rounded-md border border-black/10 bg-neutral-50 p-3 dark:border-white/10 dark:bg-neutral-800/30">
            <svg viewBox="0 0 620 260" className="h-[240px] w-full">
              <defs>
                <linearGradient id="reportAreaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <g className="text-black dark:text-white">
                <path d="M20 220 L600 220" stroke="currentColor" strokeOpacity="0.15" />
                <path
                  d="M20 195 L72 182 L124 190 L176 168 L228 156 L280 142 L332 148 L384 124 L436 112 L488 103 L540 82 L592 65 L592 220 L20 220 Z"
                  fill="url(#reportAreaGradient)"
                />
                <path
                  d="M20 195 L72 182 L124 190 L176 168 L228 156 L280 142 L332 148 L384 124 L436 112 L488 103 L540 82 L592 65"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-neutral-600 dark:text-neutral-400">
            {monthlyRevenuePoints.map((point, idx) => (
              <span key={point + idx} className="rounded-full border border-black/15 px-2 py-1 dark:border-white/15">
                M{idx + 1}: {point}
              </span>
            ))}
          </div>
        </article>

        <div className="space-y-6">
          <article className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
            <h3 className="text-base font-semibold">Fleet Allocation</h3>
            <div className="mt-4 flex items-center gap-5">
              <div
                className="relative h-36 w-36 rounded-full"
                style={{
                  background:
                    "conic-gradient(#000000 0 58%, #525252 58% 81%, #a3a3a3 81% 93%, #e5e5e5 93% 100%)",
                }}
              >
                <div className="absolute inset-[18px] rounded-full bg-white dark:bg-neutral-900" />
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-black" /> Active 58%</p>
                <p className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-neutral-600" /> Available 23%</p>
                <p className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-neutral-400" /> Reserved 12%</p>
                <p className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-neutral-200" /> Service 7%</p>
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
            <h3 className="text-base font-semibold">Branch Utilization</h3>
            <div className="mt-4 space-y-3">
              {branchUtilization.map((item) => (
                <div key={item.branch}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{item.branch}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
                    <div className="h-2 rounded-full bg-black dark:bg-white" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

function SettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [autoAssignCars, setAutoAssignCars] = useState(true)

  const Toggle = ({
    enabled,
    onToggle,
  }: {
    enabled: boolean
    onToggle: () => void
  }) => (
    <button
      type="button"
      onClick={onToggle}
      className={`relative h-7 w-12 rounded-full border transition ${
        enabled
          ? "border-black bg-black dark:border-white dark:bg-white"
          : "border-black/25 bg-neutral-200 dark:border-white/25 dark:bg-neutral-700"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition dark:bg-black ${
          enabled ? "left-6" : "left-0.5"
        }`}
      />
    </button>
  )

  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Settings</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Configure system preferences, notifications, and booking rules.
        </p>
      </div>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
          <div className="mb-4 flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            <h3 className="text-base font-semibold">General Preferences</h3>
          </div>
          <div className="space-y-4">
            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Default Booking Currency</span>
              <input value="MWK" readOnly className="h-10 w-full rounded-md border border-black/15 bg-neutral-100 px-3 text-sm dark:border-white/15 dark:bg-neutral-800" />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Default Branch</span>
              <input placeholder="Lilongwe HQ" className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm dark:border-white/15 dark:bg-neutral-900" />
            </label>
            <div className="flex items-center justify-between rounded-md border border-black/10 px-3 py-2.5 dark:border-white/10">
              <div>
                <p className="text-sm font-medium">Auto Assign Available Vehicle</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Assign based on class and route.</p>
              </div>
              <Toggle enabled={autoAssignCars} onToggle={() => setAutoAssignCars((prev) => !prev)} />
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
          <div className="mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <h3 className="text-base font-semibold">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-md border border-black/10 px-3 py-2.5 dark:border-white/10">
              <div>
                <p className="text-sm font-medium">Email Alerts</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Booking status and payment updates.</p>
              </div>
              <Toggle enabled={emailAlerts} onToggle={() => setEmailAlerts((prev) => !prev)} />
            </div>
            <div className="flex items-center justify-between rounded-md border border-black/10 px-3 py-2.5 dark:border-white/10">
              <div>
                <p className="text-sm font-medium">SMS Alerts</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Pickup reminders and overdue notices.</p>
              </div>
              <Toggle enabled={smsAlerts} onToggle={() => setSmsAlerts((prev) => !prev)} />
            </div>
          </div>
        </article>

        <article className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
          <div className="mb-4 flex items-center gap-2">
            <CalendarCheck2 className="h-5 w-5" />
            <h3 className="text-base font-semibold">Booking Rules</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5">
              <span className="text-sm font-medium">Minimum Rental Days</span>
              <input type="number" defaultValue={1} className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm dark:border-white/15 dark:bg-neutral-900" />
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-medium">Late Return Fee (MWK)</span>
              <input type="number" defaultValue={60000} className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm dark:border-white/15 dark:bg-neutral-900" />
            </label>
          </div>
        </article>

        <article className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
          <div className="mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            <h3 className="text-base font-semibold">Security</h3>
          </div>
          <div className="space-y-4">
            <label className="block space-y-1.5">
              <span className="text-sm font-medium">Session Timeout (minutes)</span>
              <input type="number" defaultValue={30} className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm dark:border-white/15 dark:bg-neutral-900" />
            </label>
            <Button className="h-10 rounded-md border border-black bg-black px-4 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200">
              Save Settings
            </Button>
          </div>
        </article>
      </section>
    </main>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          This page is ready for the next UI section.
        </p>
      </div>
    </main>
  )
}

function TrackingPage() {
  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Car Tracking</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Live tracking status and latest location updates for your fleet.
        </p>
      </div>

      <section className="grid gap-5 md:grid-cols-2">
        {trackedCars.map((car) => (
          <article key={car.plate} className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{car.vehicle}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Plate: {car.plate}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Driver: {car.driver}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  car.status === "Moving"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white"
                }`}
              >
                {car.status}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">Current Location</p>
                <p className="mt-1 font-medium">{car.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">Current Speed</p>
                <p className="mt-1 font-medium">{car.speed}</p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to={`/dashboard/tracking/${car.plate}`}
                className="inline-flex items-center rounded-md border border-black bg-black px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

function TrackingDetailPage() {
  const { plate } = useParams()
  const car = trackedCars.find((item) => item.plate === plate)

  if (!car) {
    return <PlaceholderPage title="Tracking record not found" />
  }

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${car.lng - 0.02}%2C${car.lat - 0.02}%2C${car.lng + 0.02}%2C${car.lat + 0.02}&layer=mapnik&marker=${car.lat}%2C${car.lng}`
  const movementLogs = [
    { time: "2026-03-05 08:12", bookingRef: "BK-1092", event: "Picked up", location: "Lilongwe Branch", speed: "0 km/h" },
    { time: "2026-03-05 08:31", bookingRef: "BK-1092", event: "In transit", location: "M1 Highway", speed: "58 km/h" },
    { time: "2026-03-05 09:04", bookingRef: "BK-1092", event: "Stopover", location: "Area 18", speed: "0 km/h" },
    { time: "2026-03-05 09:18", bookingRef: "BK-1092", event: "In transit", location: "City Ring Road", speed: "46 km/h" },
    { time: "2026-03-05 09:42", bookingRef: "BK-1092", event: "Current location", location: car.location, speed: car.speed },
  ]

  return (
    <main className="flex-1 p-5 sm:p-6 lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{car.vehicle} Tracking</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Plate: {car.plate} · Last update: {car.lastUpdate}
          </p>
        </div>
        <Link
          to="/dashboard/tracking"
          className="inline-flex items-center rounded-md border border-black/20 px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-white/20 dark:hover:bg-neutral-800"
        >
          Back to Tracking
        </Link>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <article className="overflow-hidden rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-neutral-900">
          <div className="border-b border-black/10 px-5 py-4 dark:border-white/10">
            <h3 className="text-base font-semibold">Live Location Map</h3>
          </div>
          <div className="h-[440px] w-full">
            <iframe
              title={`${car.vehicle} live location map`}
              src={mapSrc}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </article>

        <article className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900">
          <h3 className="text-base font-semibold">Vehicle Details</h3>
          <div className="mt-4 space-y-3 text-sm">
            <p><span className="text-neutral-500 dark:text-neutral-400">Status:</span> {car.status}</p>
            <p><span className="text-neutral-500 dark:text-neutral-400">Current Speed:</span> {car.speed}</p>
            <p><span className="text-neutral-500 dark:text-neutral-400">Current Location:</span> {car.location}</p>
            <p><span className="text-neutral-500 dark:text-neutral-400">Driver:</span> {car.driver}</p>
            <p><span className="text-neutral-500 dark:text-neutral-400">Fuel Level:</span> {car.fuel}</p>
            <p><span className="text-neutral-500 dark:text-neutral-400">Coordinates:</span> {car.lat}, {car.lng}</p>
          </div>
        </article>
      </section>

      <section className="mt-6 rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-neutral-900">
        <div className="border-b border-black/10 px-5 py-4 dark:border-white/10">
          <h3 className="text-base font-semibold">Booked Trip Movement Log</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Timeline of movement events recorded during the current booking.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b border-black/10 text-left dark:border-white/10">
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Time</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Booking Ref</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Event</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Location</th>
                <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-300">Speed</th>
              </tr>
            </thead>
            <tbody>
              {movementLogs.map((log) => (
                <tr key={`${log.time}-${log.event}`} className="border-b border-black/10 dark:border-white/10">
                  <td className="px-5 py-3">{log.time}</td>
                  <td className="px-5 py-3">{log.bookingRef}</td>
                  <td className="px-5 py-3">{log.event}</td>
                  <td className="px-5 py-3">{log.location}</td>
                  <td className="px-5 py-3">{log.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

function DashboardLayout() {
  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleMenuToggle = () => {
    if (window.innerWidth >= 1024) {
      setIsSidebarCollapsed((prev) => !prev)
      return
    }
    setIsMobileSidebarOpen((prev) => !prev)
  }

  const closeMobileSidebar = () => setIsMobileSidebarOpen(false)

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-neutral-950 text-white" : "bg-neutral-100 text-black"}`}>
      <header className="sticky top-0 z-20 w-full border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-neutral-900/90">
        <div className="mx-auto flex h-16 w-full items-center justify-between gap-3 px-4 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <button
              onClick={handleMenuToggle}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black/15 bg-white hover:bg-neutral-100 dark:border-white/20 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              aria-label="Toggle sidebar"
              title="Toggle sidebar"
            >
              <Menu className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black">
                <CarFront className="h-4 w-4" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  Car Rental
                </p>
                <h1 className="text-sm font-semibold">Management</h1>
              </div>
            </div>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-2 lg:flex">
            <div className="flex h-10 w-full max-w-md items-center gap-2 rounded-md border border-black/10 bg-white px-3 dark:border-white/10 dark:bg-neutral-900">
              <Search className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
                placeholder="Search vehicles, bookings..."
              />
            </div>
            <Button className="h-10 rounded-md border border-black bg-black px-4 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200">
              New Booking
            </Button>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Button className="h-10 rounded-md border border-black bg-black px-3 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 lg:hidden">
              New
            </Button>
            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-black/15 bg-white hover:bg-neutral-100 dark:border-white/15 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <CircleHelp className="h-4 w-4" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-black/15 bg-white hover:bg-neutral-100 dark:border-white/15 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <Bell className="h-4 w-4" />
            </button>
            <details className="relative">
              <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center gap-1 rounded-md border border-black/15 bg-white text-sm font-medium hover:bg-neutral-100 dark:border-white/15 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <UserRound className="h-4 w-4" />
              </summary>
              <div className="absolute right-0 top-12 z-30 w-44 rounded-md border border-black/10 bg-white p-1 shadow-lg dark:border-white/10 dark:bg-neutral-900">
                <button className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  Profile
                </button>
                <button
                  onClick={() => navigate("/dashboard/settings")}
                  className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  Settings
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  Sign out
                </button>
              </div>
            </details>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)]">
        <aside
          className={`hidden lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:shrink-0 lg:self-start lg:flex-col lg:overflow-hidden lg:border-r lg:border-black/10 lg:bg-white lg:transition-all lg:duration-200 lg:dark:border-white/10 lg:dark:bg-neutral-900 ${
            isSidebarCollapsed ? "lg:w-24" : "lg:w-72"
          }`}
        >
          <nav
            className={`min-h-0 flex-1 overflow-y-auto ${
              isSidebarCollapsed ? "space-y-2 px-2.5 py-4" : "space-y-1 p-4 pt-5"
            }`}
          >
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/dashboard"}
                  className={({ isActive }) =>
                    `group flex w-full items-center rounded-md text-left text-sm transition ${
                      isSidebarCollapsed ? "h-11 justify-center px-0 py-0" : "justify-between px-3 py-2.5"
                    } ${
                      isActive
                        ? "bg-black text-white shadow-sm dark:bg-white dark:text-black"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                    }`
                  }
                  title={isSidebarCollapsed ? item.label : undefined}
                  onClick={closeMobileSidebar}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    {!isSidebarCollapsed && item.label}
                  </span>
                  {!isSidebarCollapsed && (
                    <ChevronRight className="h-4 w-4 opacity-50 transition group-hover:opacity-80" />
                  )}
                </NavLink>
              )
            })}
          </nav>

          <div className="mt-auto border-t border-black/10 p-4 dark:border-white/10">
            <div className={`flex items-center gap-2 ${isSidebarCollapsed ? "flex-col" : ""}`}>
              <Button
                onClick={() => {
                  closeMobileSidebar()
                  navigate("/login")
                }}
                className={`h-11 rounded-md border border-black bg-black text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 ${
                  isSidebarCollapsed ? "w-11 px-0" : "flex-1"
                }`}
                title={isSidebarCollapsed ? "Logout" : undefined}
              >
                {isSidebarCollapsed ? <LogOut className="h-4 w-4" /> : "Logout"}
              </Button>
              <button
                onClick={() => setIsDarkMode((prev) => !prev)}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-black/15 bg-white hover:bg-neutral-100 dark:border-white/20 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </aside>

        {isMobileSidebarOpen && (
          <>
            <button
              onClick={closeMobileSidebar}
              className="fixed inset-0 z-20 bg-black/40 lg:hidden"
              aria-label="Close sidebar"
            />
            <aside className="fixed inset-y-0 left-0 z-30 flex h-full w-[74vw] max-w-[300px] flex-col overflow-hidden border-r border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-900 lg:hidden">
              <div className="flex h-16 items-center justify-between border-b border-black/10 px-4 dark:border-white/10">
                <p className="text-sm font-semibold">Menu</p>
                <button
                  onClick={closeMobileSidebar}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-black/15 hover:bg-neutral-100 dark:border-white/15 dark:hover:bg-neutral-800"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto p-4 pt-5">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      end={item.to === "/dashboard"}
                      className={({ isActive }) =>
                        `group flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm transition ${
                          isActive
                            ? "bg-black text-white shadow-sm dark:bg-white dark:text-black"
                            : "text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                        }`
                      }
                      onClick={closeMobileSidebar}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </span>
                      <ChevronRight className="h-4 w-4 opacity-50 transition group-hover:opacity-80" />
                    </NavLink>
                  )
                })}
              </nav>
              <div className="mt-auto border-t border-black/10 p-4 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => {
                      closeMobileSidebar()
                      navigate("/login")
                    }}
                    className="h-11 flex-1 rounded-md border border-black bg-black text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                  >
                    Logout
                  </Button>
                  <button
                    onClick={() => setIsDarkMode((prev) => !prev)}
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-black/15 bg-white hover:bg-neutral-100 dark:border-white/20 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </aside>
          </>
        )}

        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="tracking/:plate" element={<TrackingDetailPage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="customers" element={<ClientsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
