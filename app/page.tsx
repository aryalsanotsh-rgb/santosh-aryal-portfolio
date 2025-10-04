"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail, Linkedin, MapPin, FileDown, Building2, Droplets, Layers, Briefcase, Award } from "lucide-react"
import { useState } from "react"

export default function Portfolio() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">SA</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm hover:text-gray-600 transition-colors">
                About
              </a>
              <a href="#education" className="text-sm hover:text-gray-600 transition-colors">
                Education
              </a>
              <a href="#experience" className="text-sm hover:text-gray-600 transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm hover:text-gray-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">
                Contact
              </a>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <FileDown className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">Santosh Aryal</h1>
              <p className="text-xl text-gray-600 mb-4">Civil Engineering Student</p>
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                A motivated and detail-oriented Civil Engineering student from Pulchowk Campus with a strong foundation
                in structural design and a keen interest in sustainable urban planning. Proven ability to apply
                technical software like ETABS, STAAD.Pro, and GIS in projects ranging from the seismic analysis of
                multi-storey buildings to data-driven research on urban infrastructure. Eager to apply academic
                knowledge and practical internship experience to contribute to innovative and impactful engineering
                projects.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {/* Updated badge colors to use primary theme */}
                <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Civil Engineering
                </Badge>
                <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Structural Design
                </Badge>
                <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Urban Planning
                </Badge>
                <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Sustainable Infrastructure
                </Badge>
              </div>
              <div className="flex gap-3">
                <Button className="gap-2" asChild>
                  <a href="#contact">
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent" asChild>
                  <a href="https://linkedin.com/in/sanotsh-aryal-043371378" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/profile.png" alt="Santosh Aryal" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Education</h2>
            <p className="text-gray-600">Academic background and qualifications</p>
          </div>
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Bachelor of Engineering (B.E.) in Civil Engineering
                    </h3>
                    <p className="text-gray-700 font-medium">
                      Pulchowk Campus, Institute of Engineering (IOE), Tribhuvan University
                    </p>
                    <p className="text-gray-600 text-sm mt-1">Lalitpur, Nepal</p>
                  </div>
                  <Badge className="bg-gray-900 text-white">Expected Graduation: 2024</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive study in civil engineering fundamentals with specialized focus on structural design,
                  geotechnical analysis, and sustainable engineering practices. Gained hands-on experience through
                  laboratory work, field studies, and project-based learning.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      +2 in Science (Higher Secondary Education)
                    </h3>
                    <p className="text-gray-700 font-medium">United Academy</p>
                    <p className="text-gray-600 text-sm mt-1">Kathmandu, Nepal</p>
                  </div>
                  <Badge className="bg-gray-900 text-white">Graduated: 2022</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Experience</h2>
            <p className="text-gray-600">Professional work experience</p>
          </div>
          <Card className="shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Civil Engineering Intern</h3>
                      <p className="text-lg text-gray-700 font-medium">Naxalaya Pvt. Ltd.</p>
                      <p className="text-gray-600 text-sm">Kathmandu, Nepal</p>
                    </div>
                    <Badge variant="secondary">April 2024 – September 2024</Badge>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Assisted in on-site supervision and quality control protocols for commercial and residential
                    projects, ensuring adherence to construction standards.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Conducted topographic surveys using Total Station, collected field data, and prepared precise site
                    layout drawings in AutoCAD.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Supported senior engineers in structural design calculations, material estimation, and the
                    preparation of project documentation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Collaborated effectively within the project team to ensure strict compliance with structural designs
                    and national safety regulations.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="expertise" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Areas of Expertise</h2>
            <p className="text-gray-600">Specialized knowledge and interests</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Updated card colors with better accent colors */}
            <Card className="shadow-sm hover:shadow-md transition-shadow border-blue-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hydrology</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Study of water cycle, watershed management, flood control systems, and water resource planning for
                  sustainable development and environmental protection.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow border-teal-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Urban Planning</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sustainable city development, land-use zoning, transportation networks, and infrastructure planning to
                  address urbanization challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow border-indigo-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Structural Engineering</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Design and analysis of buildings, bridges, and infrastructure with emphasis on safety, durability, and
                  seismic resistance for earthquake-prone regions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Research & Projects</h2>
            <p className="text-gray-600">Academic research and project work</p>
          </div>
          <div className="space-y-6">
            {/* Added Dialog wrapper for Urban Planning project */}
            <Dialog open={openDialog === "urban"} onOpenChange={(open) => setOpenDialog(open ? "urban" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-sm hover:shadow-lg transition-all cursor-pointer border-teal-100 hover:border-teal-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Layers className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Research Project – Urban Planning for Sustainable Cities
                        </h3>
                        <p className="text-sm text-gray-500">Click to view details</p>
                      </div>
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

            {/* Added Dialog wrapper for G+5 Building project */}
            <Dialog open={openDialog === "building"} onOpenChange={(open) => setOpenDialog(open ? "building" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-sm hover:shadow-lg transition-all cursor-pointer border-indigo-100 hover:border-indigo-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Project – Structural Design and Analysis of a G+5 Residential Building
                        </h3>
                        <p className="text-sm text-gray-500">Click to view details</p>
                      </div>
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

            {/* Added Dialog wrapper for Surveying & Hydrology project */}
            <Dialog open={openDialog === "surveying"} onOpenChange={(open) => setOpenDialog(open ? "surveying" : null)}>
              <DialogTrigger asChild>
                <Card className="shadow-sm hover:shadow-lg transition-all cursor-pointer border-blue-100 hover:border-blue-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Droplets className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Academic Projects – Surveying & Hydrology
                        </h3>
                        <p className="text-sm text-gray-500">Click to view details</p>
                      </div>
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

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Certifications</h2>
            <p className="text-gray-600">Professional development and training</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">AutoCAD Civil 3D: The Complete Guide</h3>
                    <p className="text-sm text-gray-600">SourceCAD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h2>
            <p className="text-gray-600">Interested in collaboration or have questions? I'd love to hear from you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:aryalsanotsh@gmail.com"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors break-all"
                    >
                      aryalsanotsh@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/sanotsh-aryal-043371378"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors break-all"
                    >
                      sanotsh-aryal-043371378
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-sm text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Send Message</h2>
            <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
          </div>
          <Card className="shadow-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="bg-gray-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this about?" className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={6}
                    className="bg-gray-50 resize-none"
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg" className="gap-2">
                    <Mail className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">© 2025 Santosh Aryal. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://linkedin.com/in/sanotsh-aryal-043371378" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:aryalsanotsh@gmail.com" className="text-gray-400 hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
