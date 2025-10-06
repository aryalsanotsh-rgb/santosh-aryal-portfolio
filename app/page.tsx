"use client"

import type React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Mail,
  Linkedin,
  MapPin,
  FileDown,
  Building2,
  Droplets,
  Layers,
  Briefcase,
  Award,
  Code2,
  Wrench,
  Users,
  ArrowRight,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">SA</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
                Education
              </a>
              <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-primary hover:text-white transition-all bg-transparent"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block">
                <Badge variant="secondary" className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20">
                  Civil Engineering Student
                </Badge>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Santosh <span className="gradient-text">Aryal</span>
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Kathmandu, Nepal</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A motivated and detail-oriented Civil Engineering student from Pulchowk Campus with a strong foundation
                in structural design and a keen interest in sustainable urban planning.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Structural Design
                </Badge>
                <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-700 hover:bg-teal-200">
                  Urban Planning
                </Badge>
                <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                  Sustainable Infrastructure
                </Badge>
              </div>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all" asChild>
                  <a href="#contact">
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 hover:bg-primary hover:text-white transition-all bg-transparent"
                  asChild
                >
                  <a href="https://linkedin.com/in/sanotsh-aryal-043371378" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end animate-slide-in-right">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white transition-transform duration-500 hover:scale-105">
                  <Image src="/images/profile.png" alt="Santosh Aryal" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-lg text-gray-600">Academic background and qualifications</p>
          </div>
          <div className="space-y-6">
            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Bachelor of Engineering (B.E.) in Civil Engineering
                    </h3>
                    <p className="text-gray-700 font-medium text-lg">
                      Pulchowk Campus, Institute of Engineering (IOE), Tribhuvan University
                    </p>
                    <p className="text-gray-600 text-sm mt-1">Lalitpur, Nepal</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-md">
                    Graduated: 2024
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive study in civil engineering fundamentals with specialized focus on structural design,
                  geotechnical analysis, and sustainable engineering practices. Gained hands-on experience through
                  laboratory work, field studies, and project-based learning.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      +2 in Science (Higher Secondary Education)
                    </h3>
                    <p className="text-gray-700 font-medium text-lg">United Academy</p>
                    <p className="text-gray-600 text-sm mt-1">Kathmandu, Nepal</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-md">
                    Graduated: 2022
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-gradient-to-br from-white to-blue-50/30 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-lg text-gray-600">Professional work experience</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>

            <Card className="shadow-xl border-0 card-hover ml-20 scroll-animate">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg -ml-28">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Civil Engineering Intern</h3>
                        <p className="text-xl text-gray-700 font-medium mt-1">Naxalaya Pvt. Ltd.</p>
                        <p className="text-gray-600 text-sm mt-1">Kathmandu, Nepal</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        April 2024 – September 2024
                      </Badge>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Assisted in on-site supervision and quality control protocols for commercial and residential
                      projects, ensuring adherence to construction standards.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Conducted topographic surveys using Total Station, collected field data, and prepared precise site
                      layout drawings in AutoCAD.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Supported senior engineers in structural design calculations, material estimation, and the
                      preparation of project documentation.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Collaborated effectively within the project team to ensure strict compliance with structural
                      designs and national safety regulations.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-lg text-gray-600">Specialized knowledge and interests</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 card-hover group scroll-animate bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hydrology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Study of water cycle, watershed management, flood control systems, and water resource planning for
                  sustainable development and environmental protection.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 card-hover group scroll-animate bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Urban Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sustainable city development, land-use zoning, transportation networks, and infrastructure planning to
                  address urbanization challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 card-hover group scroll-animate bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Structural Engineering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Design and analysis of buildings, bridges, and infrastructure with emphasis on safety, durability, and
                  seismic resistance for earthquake-prone regions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gradient-to-br from-white to-indigo-50/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Research & Projects</h2>
            <p className="text-lg text-gray-600">Academic research and project work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Dialog open={openDialog === "urban"} onOpenChange={(open) => setOpenDialog(open ? "urban" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-lg border-0 card-hover cursor-pointer group scroll-animate overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-600"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                          Urban Planning for Sustainable Cities
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-700">
                          Research Project
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Investigating planning strategies to enhance infrastructure and sustainable urban development.
                    </p>
                    <div className="flex items-center text-teal-600 text-sm font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-6 h-6 text-teal-600" />
                    </div>
                    <DialogTitle className="text-2xl">Urban Planning for Sustainable Cities</DialogTitle>
                  </div>
                  <DialogDescription>Research Project</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      This research project focused on developing comprehensive planning strategies to enhance urban
                      infrastructure and address the challenges of rapidly growing cities in Nepal.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Contributions</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-teal-600 mt-1 font-bold">•</span>
                        <span className="text-gray-700">
                          Investigated planning strategies to enhance infrastructure, land-use zoning, and
                          transportation networks in rapidly growing urban areas.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-teal-600 mt-1 font-bold">•</span>
                        <span className="text-gray-700">
                          Applied GIS and data-driven analysis to model and propose solutions for sustainable urban
                          development.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-teal-600 mt-1 font-bold">•</span>
                        <span className="text-gray-700">
                          Researched innovative solutions to address key challenges, including traffic congestion, solid
                          waste management, and the integration of green spaces.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">GIS Tools</Badge>
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">Data Analysis</Badge>
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">Urban Modeling</Badge>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openDialog === "building"} onOpenChange={(open) => setOpenDialog(open ? "building" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-lg border-0 card-hover cursor-pointer group scroll-animate overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          G+5 Residential Building Design
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">
                          Academic Project
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Comprehensive structural design and seismic analysis using ETABS and STAAD.Pro.
                    </p>
                    <div className="flex items-center text-indigo-600 text-sm font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <DialogTitle className="text-2xl">
                      Structural Design and Analysis of a G+5 Residential Building
                    </DialogTitle>
                  </div>
                  <DialogDescription>Academic Project</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Comprehensive structural design project for a six-storey residential building with emphasis on
                      seismic resistance and compliance with Nepal National Building Codes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Contributions</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-indigo-600 mt-1 font-bold">•</span>
                        <span className="text-gray-700">
                          Performed comprehensive structural design and load-bearing analysis using ETABS and STAAD.Pro,
                          focusing on seismic resistance.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-600 mt-1 font-bold">•</span>
                        <span className="text-gray-700">
                          Developed detailed cost estimates, bar bending schedules, and reinforcement detailing for all
                          structural components.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-600 mt-1 font-bold">•</span>
                        <span className="text-gray-700">
                          Produced a full set of architectural and structural drawings in AutoCAD, ensuring compliance
                          with Nepal National Building Codes (NBC).
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">ETABS</Badge>
                      <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">STAAD.Pro</Badge>
                      <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">AutoCAD</Badge>
                      <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">NBC Compliance</Badge>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openDialog === "surveying"} onOpenChange={(open) => setOpenDialog(open ? "surveying" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-lg border-0 card-hover cursor-pointer group scroll-animate overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          Surveying & Hydrology
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                          Academic Projects
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Topographic surveying and hydrological modeling for flood risk assessment.
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-blue-600" />
                    </div>
                    <DialogTitle className="text-2xl">Surveying & Hydrology Projects</DialogTitle>
                  </div>
                  <DialogDescription>Academic Projects</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">
                      A series of academic projects focused on topographic surveying and hydrological modeling to
                      understand land development and flood risk assessment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Contributions</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-1 font-bold">•</span>
                        <span className="text-gray-700">
                          Executed a closed-traverse topographic survey using a Total Station, processing the data to
                          generate accurate contour maps for a land development proposal.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 mt-1 font-bold">•</span>
                        <span className="text-gray-700">
                          Developed a hydrological model for a local watershed to perform rainfall-runoff analysis and
                          assess potential flood risks.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Total Station</Badge>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Hydrological Modeling</Badge>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Data Processing</Badge>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600">Tools and technologies I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Engineering Software</h3>
                </div>
                <div className="space-y-3">
                  {["AutoCAD", "ETABS", "STAAD.Pro", "SAP2000", "GIS Tools"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 bg-primary/10 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Core Competencies</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Structural Design",
                    "Geotechnical Engineering",
                    "Hydrology",
                    "Transportation Planning",
                    "Cost Estimation",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 bg-teal-100 text-teal-700 border-teal-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Soft Skills</h3>
                </div>
                <div className="space-y-3">
                  {["Project Management", "Teamwork", "Problem-Solving", "Communication"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 bg-indigo-100 text-indigo-700 border-indigo-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-blue-50/30 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-lg text-gray-600">Professional development and training</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">AutoCAD Civil 3D: The Complete Guide</h3>
                    <p className="text-sm text-gray-600">SourceCAD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      Project Management for Construction: Planning, Scheduling, and Control
                    </h3>
                    <p className="text-sm text-gray-600">Skillshare</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Interested in collaboration or have questions? I'd love to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:aryalsanotsh@gmail.com"
                      className="text-sm text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      aryalsanotsh@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 card-hover scroll-animate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/sanotsh-aryal-043371378"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      sanotsh-aryal-043371378
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-indigo-50/30 py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Send Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          <Card className="shadow-2xl border-0 scroll-animate">
            <CardContent className="p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-900">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-gray-50 border-gray-200 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-50 border-gray-200 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-900">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    className="bg-gray-50 border-gray-200 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-900">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={6}
                    className="bg-gray-50 resize-none border-gray-200 focus:border-primary"
                  />
                </div>
                <div className="text-center pt-4">
                  <Button type="submit" size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all px-8">
                    <Mail className="w-5 h-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="text-3xl font-bold gradient-text">SA</div>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/sanotsh-aryal-043371378"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:aryalsanotsh@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">© 2025 Santosh Aryal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
