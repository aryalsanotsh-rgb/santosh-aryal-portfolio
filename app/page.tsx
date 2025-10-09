"use client"

import type React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
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
  Heart,
  Github,
  Download,
  Star,
  Badge as Bridge,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { toast } = useToast()
  const [projectLikes, setProjectLikes] = useState<Record<string, boolean>>({})

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

  const toggleLike = (projectId: string) => {
    setProjectLikes((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-card/95 backdrop-blur-xl shadow-lg shadow-primary/5" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">SA</div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#education"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Education
              </a>
              <a
                href="#experience"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all border-primary/30 bg-transparent"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block">
                <Badge variant="secondary" className="text-xs px-3 py-1 bg-primary/20 text-primary border-primary/30">
                  Civil Engineering Student
                </Badge>
              </div>
              <h1 className="text-6xl font-bold text-foreground leading-tight">
                Santosh <span className="gradient-text">Aryal</span>
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Kathmandu, Nepal</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A motivated and detail-oriented Civil Engineering student from Pulchowk Campus with a strong foundation
                in structural design and a keen interest in sustainable urban planning.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                  Structural Design
                </Badge>
                <Badge variant="secondary" className="text-xs bg-accent/20 text-accent border-accent/30">
                  Urban Planning
                </Badge>
                <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                  Sustainable Infrastructure
                </Badge>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all glow-effect"
                  asChild
                >
                  <a href="#contact">
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all border-primary/30 bg-transparent"
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-3xl"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary/30 transition-transform duration-500 hover:scale-105 glow-effect">
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
            <h2 className="text-5xl font-bold text-foreground mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">Academic background and qualifications</p>
          </div>
          <div className="space-y-6">
            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Bachelor of Engineering (B.E.) in Civil Engineering
                    </h3>
                    <p className="text-muted-foreground font-medium text-lg">
                      Pulchowk Campus, Institute of Engineering (IOE), Tribhuvan University
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">Lalitpur, Nepal</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-md shadow-primary/20">
                    Graduated: 2024
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive study in civil engineering fundamentals with specialized focus on structural design,
                  geotechnical analysis, and sustainable engineering practices. Gained hands-on experience through
                  laboratory work, field studies, and project-based learning.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      +2 in Science (Higher Secondary Education)
                    </h3>
                    <p className="text-muted-foreground font-medium text-lg">United Academy</p>
                    <p className="text-muted-foreground text-sm mt-1">Kathmandu, Nepal</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-md shadow-primary/20">
                    Graduated: 2022
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground">Professional work experience</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>

            <Card className="shadow-xl shadow-primary/10 border-primary/20 card-hover ml-20 scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 -ml-28 glow-effect">
                    <Briefcase className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Civil Engineering Intern</h3>
                        <p className="text-xl text-muted-foreground font-medium mt-1">Naxalaya Pvt. Ltd.</p>
                        <p className="text-muted-foreground text-sm mt-1">Kathmandu, Nepal</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        April 2024 – September 2024
                      </Badge>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4 text-muted-foreground">
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
            <h2 className="text-5xl font-bold text-foreground mb-4">Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground">Specialized knowledge and interests</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover group scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Hydrology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Study of water cycle, watershed management, flood control systems, and water resource planning for
                  sustainable development and environmental protection.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover group scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Urban Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sustainable city development, land-use zoning, transportation networks, and infrastructure planning to
                  address urbanization challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover group scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform glow-effect">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Structural Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Design and analysis of buildings, bridges, and infrastructure with emphasis on safety, durability, and
                  seismic resistance for earthquake-prone regions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gradient-to-br from-purple-950/50 via-background to-purple-900/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-foreground mb-4">Research & Projects</h2>
            <p className="text-lg text-muted-foreground">Academic research and project work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: Urban Planning */}
            <Dialog open={openDialog === "urban"} onOpenChange={(open) => setOpenDialog(open ? "urban" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-lg border-primary/10 card-hover cursor-pointer group scroll-animate overflow-hidden bg-card">
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
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-900 to-purple-950 border-purple-700 p-0">
                <div className="relative p-8">
                  <button
                    onClick={() => setOpenDialog(null)}
                    className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-white z-10"
                  >
                    <span className="text-3xl font-light">×</span>
                  </button>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src="/urban-planning-sustainable-city-development-gis-ma.jpg"
                          alt="Urban Planning Project"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`gap-2 ${projectLikes.urban ? "bg-red-500/20 border-red-500 text-red-400" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}
                          onClick={() => toggleLike("urban")}
                        >
                          <Heart className={`w-4 h-4 ${projectLikes.urban ? "fill-red-400" : ""}`} />
                          Like
                        </Button>
                        <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white border-0">
                          <Download className="w-4 h-4" />
                          Download Report
                        </Button>
                        <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white border-0">
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-6 text-white">
                      <div>
                        <h2 className="text-3xl font-bold mb-3">Urban Planning for Sustainable Cities</h2>
                        <p className="text-purple-300 leading-relaxed">
                          This research project focused on developing comprehensive planning strategies to enhance urban
                          infrastructure and address the challenges of rapidly growing cities in Nepal.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Key Features & Highlights</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <span className="text-teal-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Investigated planning strategies to enhance infrastructure, land-use zoning, and
                              transportation networks in rapidly growing urban areas.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-teal-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Applied GIS and data-driven analysis to model and propose solutions for sustainable urban
                              development.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-teal-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Researched innovative solutions to address key challenges, including traffic congestion,
                              solid waste management, and the integration of green spaces.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Rate this project</h3>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-6 h-6 text-yellow-400 cursor-pointer hover:fill-yellow-400 transition-all"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-purple-300 text-sm">#urban-planning</span>
                        <span className="text-purple-300 text-sm">#GIS</span>
                        <span className="text-purple-300 text-sm">#sustainable-development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Project 2: G+5 Building */}
            <Dialog open={openDialog === "building"} onOpenChange={(open) => setOpenDialog(open ? "building" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-lg border-primary/10 card-hover cursor-pointer group scroll-animate overflow-hidden bg-card">
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
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-900 to-purple-950 border-purple-700 p-0">
                <div className="relative p-8">
                  <button
                    onClick={() => setOpenDialog(null)}
                    className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-white z-10"
                  >
                    <span className="text-3xl font-light">×</span>
                  </button>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src="/residential-building-structural-design-etabs-analy.jpg"
                          alt="G+5 Building Project"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`gap-2 ${projectLikes.building ? "bg-red-500/20 border-red-500 text-red-400" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}
                          onClick={() => toggleLike("building")}
                        >
                          <Heart className={`w-4 h-4 ${projectLikes.building ? "fill-red-400" : ""}`} />
                          Like
                        </Button>
                        <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white border-0">
                          <Download className="w-4 h-4" />
                          Download Report
                        </Button>
                        <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white border-0">
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-6 text-white">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">
                          Structural Design and Analysis of a G+5 Residential Building
                        </h2>
                        <p className="text-purple-300 leading-relaxed">
                          Comprehensive structural design project for a six-storey residential building with emphasis on
                          seismic resistance and compliance with Nepal National Building Codes.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Key Features & Highlights</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <span className="text-indigo-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Performed comprehensive structural design and load-bearing analysis using ETABS and
                              STAAD.Pro, focusing on seismic resistance.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-indigo-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Developed detailed cost estimates, bar bending schedules, and reinforcement detailing for
                              all structural components.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-indigo-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Produced a full set of architectural and structural drawings in AutoCAD, ensuring
                              compliance with Nepal National Building Codes (NBC).
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Rate this project</h3>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-6 h-6 text-yellow-400 cursor-pointer hover:fill-yellow-400 transition-all"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-purple-300 text-sm">#structural-design</span>
                        <span className="text-purple-300 text-sm">#ETABS</span>
                        <span className="text-purple-300 text-sm">#seismic-analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Project 3: Surveying & Hydrology */}
            <Dialog open={openDialog === "surveying"} onOpenChange={(open) => setOpenDialog(open ? "surveying" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-lg border-primary/10 card-hover cursor-pointer group scroll-animate overflow-hidden bg-card">
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
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-900 to-purple-950 border-purple-700 p-0">
                <div className="relative p-8">
                  <button
                    onClick={() => setOpenDialog(null)}
                    className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-white z-10"
                  >
                    <span className="text-3xl font-light">×</span>
                  </button>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src="/topographic-survey-total-station-hydrological-mode.jpg"
                          alt="Surveying & Hydrology Project"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`gap-2 ${projectLikes.surveying ? "bg-red-500/20 border-red-500 text-red-400" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}
                          onClick={() => toggleLike("surveying")}
                        >
                          <Heart className={`w-4 h-4 ${projectLikes.surveying ? "fill-red-400" : ""}`} />
                          Like
                        </Button>
                        <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white border-0">
                          <Download className="w-4 h-4" />
                          Download Report
                        </Button>
                        <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white border-0">
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-6 text-white">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">Surveying & Hydrology Projects</h2>
                        <p className="text-purple-300 leading-relaxed">
                          A series of academic projects focused on topographic surveying and hydrological modeling to
                          understand land development and flood risk assessment.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Key Features & Highlights</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Executed a closed-traverse topographic survey using a Total Station, processing the data
                              to generate accurate contour maps for a land development proposal.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Developed a hydrological model for a local watershed to perform rainfall-runoff analysis
                              and assess potential flood risks.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Rate this project</h3>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-6 h-6 text-yellow-400 cursor-pointer hover:fill-yellow-400 transition-all"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-purple-300 text-sm">#surveying</span>
                        <span className="text-purple-300 text-sm">#hydrology</span>
                        <span className="text-purple-300 text-sm">#flood-analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openDialog === "bridge"} onOpenChange={(open) => setOpenDialog(open ? "bridge" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-lg border-primary/10 card-hover cursor-pointer group scroll-animate overflow-hidden bg-card">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Bridge className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          Pedestrian Bridge Design
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                          Academic Project
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Design and analysis of a steel truss pedestrian bridge with seismic considerations.
                    </p>
                    <div className="flex items-center text-orange-600 text-sm font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-900 to-purple-950 border-purple-700 p-0">
                <div className="relative p-8">
                  <button
                    onClick={() => setOpenDialog(null)}
                    className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-white z-10"
                  >
                    <span className="text-3xl font-light">×</span>
                  </button>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src="/steel-truss-pedestrian-bridge-structural-design.jpg"
                          alt="Bridge Design Project"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`gap-2 ${projectLikes.bridge ? "bg-red-500/20 border-red-500 text-red-400" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}
                          onClick={() => toggleLike("bridge")}
                        >
                          <Heart className={`w-4 h-4 ${projectLikes.bridge ? "fill-red-400" : ""}`} />
                          Like
                        </Button>
                        <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white border-0">
                          <Download className="w-4 h-4" />
                          Download Report
                        </Button>
                        <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white border-0">
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-6 text-white">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">Pedestrian Bridge Design and Analysis</h2>
                        <p className="text-purple-300 leading-relaxed">
                          Design project for a 30-meter steel truss pedestrian bridge connecting two urban areas, with
                          emphasis on structural efficiency and seismic safety.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Key Features & Highlights</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <span className="text-orange-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Designed a steel truss bridge structure using SAP2000, optimizing member sizes for load
                              distribution and material efficiency.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-orange-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Performed seismic analysis considering Nepal's high seismic zone requirements and designed
                              appropriate foundation systems.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-orange-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Created detailed connection designs, fabrication drawings, and construction methodology
                              documentation.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Rate this project</h3>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-6 h-6 text-yellow-400 cursor-pointer hover:fill-yellow-400 transition-all"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-purple-300 text-sm">#bridge-design</span>
                        <span className="text-purple-300 text-sm">#steel-structures</span>
                        <span className="text-purple-300 text-sm">#SAP2000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog
              open={openDialog === "watersupply"}
              onOpenChange={(open) => setOpenDialog(open ? "watersupply" : null)}
            >
              <DialogTrigger asChild>
                <Card className="shadow-lg border-primary/10 card-hover cursor-pointer group scroll-animate overflow-hidden bg-card">
                  <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-600"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                          Water Supply System Design
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-cyan-100 text-cyan-700">
                          Academic Project
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Design of a gravity-fed water supply system for a rural community.
                    </p>
                    <div className="flex items-center text-cyan-600 text-sm font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-900 to-purple-950 border-purple-700 p-0">
                <div className="relative p-8">
                  <button
                    onClick={() => setOpenDialog(null)}
                    className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-white z-10"
                  >
                    <span className="text-3xl font-light">×</span>
                  </button>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src="/water-supply-system-gravity-fed-pipeline-design.jpg"
                          alt="Water Supply System Project"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`gap-2 ${projectLikes.watersupply ? "bg-red-500/20 border-red-500 text-red-400" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}
                          onClick={() => toggleLike("watersupply")}
                        >
                          <Heart className={`w-4 h-4 ${projectLikes.watersupply ? "fill-red-400" : ""}`} />
                          Like
                        </Button>
                        <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white border-0">
                          <Download className="w-4 h-4" />
                          Download Report
                        </Button>
                        <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white border-0">
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-6 text-white">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">Water Supply System Design</h2>
                        <p className="text-purple-300 leading-relaxed">
                          Comprehensive design of a gravity-fed water supply system for a rural community of 500
                          households, ensuring sustainable and reliable water access.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Key Features & Highlights</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Designed a complete water supply network including intake, transmission lines, storage
                              tanks, and distribution system.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Performed hydraulic calculations for pipe sizing, pressure analysis, and flow optimization
                              using EPANET software.
                            </span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span className="text-purple-200">
                              Developed cost estimates, construction schedules, and operation & maintenance plans for
                              long-term sustainability.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Rate this project</h3>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-6 h-6 text-yellow-400 cursor-pointer hover:fill-yellow-400 transition-all"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-purple-300 text-sm">#water-supply</span>
                        <span className="text-purple-300 text-sm">#hydraulic-design</span>
                        <span className="text-purple-300 text-sm">#EPANET</span>
                      </div>
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
            <h2 className="text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">Tools and technologies I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                    <Code2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Engineering Software</h3>
                </div>
                <div className="space-y-3">
                  {["AutoCAD", "ETABS", "STAAD.Pro", "SAP2000", "GIS Tools"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 bg-primary/20 text-primary border-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Core Competencies</h3>
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
                      className="mr-2 mb-2 bg-teal-500/20 text-teal-400 border-teal-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-md shadow-accent/20">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Soft Skills</h3>
                </div>
                <div className="space-y-3">
                  {["Project Management", "Teamwork", "Problem-Solving", "Communication"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="mr-2 mb-2 bg-accent/20 text-accent border-accent/30"
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

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold text-foreground mb-4">Certifications</h2>
            <p className="text-lg text-muted-foreground">Professional development and training</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">AutoCAD Civil 3D: The Complete Guide</h3>
                    <p className="text-sm text-muted-foreground">SourceCAD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      Project Management for Construction: Planning, Scheduling, and Control
                    </h3>
                    <p className="text-sm text-muted-foreground">Skillshare</p>
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
            <h2 className="text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Interested in collaboration or have questions? I'd love to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:aryalsanotsh@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      aryalsanotsh@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-primary/5 border-primary/10 card-hover scroll-animate bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                    <Linkedin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/sanotsh-aryal-043371378"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
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

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-5xl font-bold text-foreground mb-4">Send Message</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          <Card className="shadow-2xl shadow-primary/10 border-primary/20 scroll-animate bg-card">
            <CardContent className="p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-secondary border-primary/20 focus:border-primary text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-secondary border-primary/20 focus:border-primary text-foreground"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    className="bg-secondary border-primary/20 focus:border-primary text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={6}
                    className="bg-secondary resize-none border-primary/20 focus:border-primary text-foreground"
                  />
                </div>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all px-8 glow-effect"
                  >
                    <Mail className="w-5 h-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-primary/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="text-3xl font-bold gradient-text">SA</div>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/sanotsh-aryal-043371378"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:aryalsanotsh@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Santosh Aryal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
