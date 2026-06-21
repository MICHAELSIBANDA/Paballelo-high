'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone, Mail, Award, Users, Building2, GraduationCap, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Paballelo High School
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Also referred to as Paballelo Senior Secondary School
            </p>
            <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
              A public secondary school located in Paballelo, Upington, Northern Cape, South Africa, 
              serving the community with excellence in education and commitment to learner development.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Building2 className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground mb-1">1,120+</div>
              <div className="text-sm text-muted-foreground">Learners</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground mb-1">40+</div>
              <div className="text-sm text-muted-foreground">Teachers</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <GraduationCap className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground mb-1">1970s</div>
              <div className="text-sm text-muted-foreground">Established</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground mb-1">88.7%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Introduction
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Paballelo High School, also referred to in recent official sources as Paballelo Senior Secondary School, 
              is a public secondary school located in Paballelo, Upington, in the ZF Mgcawu District of the Northern Cape Province, South Africa.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The school appears to be one of the established public high schools serving the Paballelo community and the broader Upington area. 
              In 2026, it gained renewed public visibility when Deputy Minister in the Presidency Nonceba Mhlauli, who identified the school 
              as her alma mater, returned to hand over a cyber lab aimed at strengthening digital access and digital learning opportunities for learners.
            </p>
            <p className="text-lg text-muted-foreground">
              Although Paballelo High School does not appear to maintain a robust public-facing official website with a full institutional profile, 
              enough evidence exists across government sources, education directories, vacancy records, infrastructure planning documents, and public 
              historical references to assemble a substantial profile of the school. The available record suggests that the school is a significant 
              public secondary institution in the Upington education landscape, with a large learner body, a township-community role, and recent 
              investment in digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* School Identity */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              School Identity and Naming
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The school appears under two closely related names in public sources:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2">
              <li>Paballelo High School</li>
              <li>Paballelo Senior Secondary School</li>
            </ul>
            <p className="text-lg text-muted-foreground mb-6">
              These names are used interchangeably across sources. The evidence strongly indicates they refer to the same school in Paballelo, Upington.
            </p>
            <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground font-medium">
                For reporting purposes, the safest formulation is: <strong>Paballelo High School (also referred to in official and directory sources as Paballelo Senior Secondary School)</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Location and Geographic Setting
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Town and Community</h3>
                <p className="text-lg text-muted-foreground">
                  The school is located in Paballelo, a township area associated with Upington in the Northern Cape province of South Africa. 
                  Upington is one of the principal towns in the province and serves as an important administrative, agricultural, transport, and service centre in the region.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Administrative District</h3>
                <p className="text-lg text-muted-foreground">
                  Public records place the school in the ZF Mgcawu District. This is the education district under which the school is administered 
                  in the Northern Cape public education system.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Address Information</h3>
              <div className="space-y-2 text-lg text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Gudula Street, Paballelo, Upington 8800</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>054 332 2121</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Type */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              School Type and Institutional Character
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The school is a public secondary school / senior secondary school / high school. This is supported by government references to the school 
              in an education and youth-development context, Northern Cape vacancy documentation that places it in Senior & FET Phase and Senior Phase 
              teaching contexts, and directory listings describing it as a school in Upington/Paballelo.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Grade Range</h3>
            <p className="text-lg text-muted-foreground mb-6">
              The most likely operational range is Grade 8–12, because it is described as a high school / senior secondary school, and one vacancy 
              record at the school references Grades 8–12 for languages in a Senior & FET post. However, the vacancy data also references a Senior Phase 
              (Grades 7–9) post at the same school.
            </p>
            <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground font-medium">
                Paballelo High School is a public secondary school that clearly serves the Senior and FET phases, and appears to teach at least Grades 8–12, 
                with some evidence of Senior Phase teaching posts linked to Grades 7–9.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leadership and Principal
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              One of the most important pieces of verified information is that in the official May 2026 speech at the cyber lab handover, the Deputy Minister addressed:
            </p>
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-primary/5 rounded-r">
              <p className="text-xl italic text-foreground">
                "Principal of Paballelo High School, Gudula"
              </p>
            </blockquote>
            <p className="text-lg text-muted-foreground mb-6">
              This is strong evidence that the principal's surname is Gudula. Additionally, the 2021 Northern Cape Department of Education vacancy advert lists:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2">
              <li>Paballelo High School, Upington, ZF Mgcawu</li>
              <li>Contact person: Mr ZM Gudula</li>
              <li>Cellphone number attached to the vacancy listing</li>
            </ul>
            <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-foreground font-medium">
                The school principal appears to be Mr Z.M. Gudula, based on a 2021 Northern Cape Department of Education vacancy notice and the Deputy Minister's 2026 official speech referring to "Principal of Paballelo High School, Gudula."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Curriculum, Phases, and Subjects
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              As a public secondary school in South Africa, Paballelo High School operates under the national public school curriculum framework, 
              meaning the Curriculum and Assessment Policy Statement (CAPS) and the National Senior Certificate (NSC) structure in the FET phase.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Evidence from Vacancy Records</h3>
            <p className="text-lg text-muted-foreground mb-6">
              The 2021 Northern Cape Department of Education vacancy document reveals actual subject groupings associated with the school:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Senior & FET Phase Language Post</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• IsiXhosa Home Language – Grades 8–12</li>
                  <li>• Setswana Home Language – Grades 8–12</li>
                  <li>• Language of instruction: English</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Senior Phase Post</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Afrikaans Home Language – Grades 7–9</li>
                  <li>• English First Additional Language – Grades 7–9</li>
                  <li>• Mathematics – Grades 7–9</li>
                  <li>• Natural Sciences – Grades 7–9</li>
                  <li>• Social Sciences – Grades 7–9</li>
                  <li>• Economic and Management Sciences – Grades 7–9</li>
                </ul>
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-lg text-foreground font-medium">
                This evidence suggests the school serves a multilingual learner population and has had both English- and Afrikaans-linked instructional arrangements, 
                alongside home-language teaching in IsiXhosa and Setswana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Infrastructure and Facilities
            </h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Cyber Lab Handover in 2026</h3>
            <p className="text-lg text-muted-foreground mb-6">
              In May 2026, the school received a Cyber Lab through a handover involving The Presidency and support from Huawei. This is one of the strongest 
              confirmed facts about the school's current infrastructure. Official government statements indicate that the lab was part of efforts to:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2">
              <li>Advance digital inclusion</li>
              <li>Improve access to technology in schools</li>
              <li>Equip learners with digital skills for the future economy</li>
            </ul>
            <p className="text-lg text-muted-foreground mb-6">
              The Deputy Minister specifically urged the matric class to use the lab to research careers and apply to universities and colleges on time.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Infrastructure Planning</h3>
            <p className="text-lg text-muted-foreground">
              A Northern Cape Department of Education Norms and Standards / infrastructure planning document lists PABALLELO HIGH SCHOOL under ZF Mgcawu 
              and indicates infrastructure projects including ablution blocks, with an estimated project cost of R5,326,765.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Development */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Digital Development and the 2026 Cyber Lab
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              This is arguably the most important recent chapter in the school's public story.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Event Overview</h3>
            <p className="text-lg text-muted-foreground mb-6">
              On 8 May 2026, Deputy Minister in the Presidency Nonceba Mhlauli handed over a Cyber Lab at Paballelo Senior Secondary School in Upington. 
              The event was announced by The Presidency, covered in an official speech, and also reported by Inside Education and South African Government publication channels.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Policy Significance</h3>
            <p className="text-lg text-muted-foreground mb-6">
              The Presidency described the handover as part of government's efforts to improve access to technology in schools, advance digital inclusion, 
              and equip learners with digital skills needed for the future economy.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Community and Symbolic Significance</h3>
            <p className="text-lg text-muted-foreground mb-6">
              The event had added emotional significance because Deputy Minister Nonceba Mhlauli matriculated from the school. In her speech, she described 
              returning to the school as a deeply personal experience and a return to the institution that helped shape her future.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Alumni and Historical Significance
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The most prominent publicly confirmed alumna is Nonceba Mhlauli, who stated during the May 2026 cyber lab handover that Paballelo High School 
              is the school from which she matriculated.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              This matters for two reasons: it demonstrates that the school has produced learners who went on to occupy national public office, and it 
              strengthens the school's symbolic status within the local community.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Historical Learning</h3>
            <p className="text-lg text-muted-foreground">
              A valuable historical reference appears in the South African History Archive (SAHA), which includes a record of personal reflections by learners 
              from Paballelo High School in Upington as part of the Nkosi Albert Luthuli Young Historians' Prize. The archive specifically references learners 
              from Paballelo High School working on oral-history material related to Mr Alfred Gubula, a figure active in the Paballelo community and civic structures.
            </p>
          </div>
        </div>
      </section>

      {/* Social Role */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Social Role in the Paballelo Community
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Paballelo High School should be understood not merely as a place of instruction, but as a community institution in a township environment. 
              Schools like Paballelo High often function as:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2">
              <li>Centres of youth development</li>
              <li>Platforms for community identity</li>
              <li>Sites of sport, culture, and civic events</li>
              <li>Gateways to tertiary study and employment</li>
              <li>Symbols of aspiration within historically disadvantaged communities</li>
            </ul>
            <p className="text-lg text-muted-foreground">
              Several features reinforce that role: the school's apparent large enrolment, its position in Paballelo (not just central Upington), its recognition in a 
              nationally publicised cyber lab event, its association with a national public figure who studied there, and its place in public historical 
              memory through learner oral-history work.
            </p>
          </div>
        </div>
      </section>

      {/* School Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              School Culture and Values
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              There is no official published mission statement or value statement that could be verified from a school-controlled source. However, the public record around 
              the school suggests several likely value themes:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Educational Aspiration and Mobility</h4>
                  <p className="text-muted-foreground">The Deputy Minister framed the school as a place from which "greatness can emerge," explicitly connecting the school to discipline, hard work, respect, and upward mobility.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Community-Rooted Identity</h4>
                  <p className="text-muted-foreground">The emotional weight attached to the school by an alumna who became a Deputy Minister suggests that Paballelo High has a strong local identity and social memory.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Growing Digital Orientation</h4>
                  <p className="text-muted-foreground">The cyber lab handover signals a deliberate shift toward digital inclusion and future-readiness.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Multilingual and Culturally Diverse Learner Base</h4>
                  <p className="text-muted-foreground">The subject and language profile in vacancy records strongly suggests that the school serves learners from different linguistic and cultural backgrounds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SWOT Analysis */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              SWOT Analysis
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-green-600">Strengths</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Established public high school in Paballelo, Upington</li>
                  <li>• Significant community footprint</li>
                  <li>• Strong symbolic value through notable alumna Nonceba Mhlauli</li>
                  <li>• Recent cyber lab investment improves digital capacity</li>
                  <li>• Evidence of multilingual and broad curriculum provision</li>
                  <li>• School included in official district/provincial planning and staffing systems</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-orange-600">Weaknesses / Constraints</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Limited public-facing official information available</li>
                  <li>• Unclear publicly verified matric performance data</li>
                  <li>• Possible infrastructure and sanitation pressures inferred from planning documents</li>
                  <li>• Likely resource pressure associated with large enrolment</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-blue-600">Opportunities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Use cyber lab to improve digital literacy, tertiary applications, and learner exposure</li>
                  <li>• Build stronger public profile and alumni engagement</li>
                  <li>• Leverage government and private-sector partnerships</li>
                  <li>• Position itself as a digitally progressive township school in the district</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-red-600">Threats / Risks</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Resource constraints typical of public township schools</li>
                  <li>• Infrastructure upkeep costs</li>
                  <li>• Unequal learner access to devices and home connectivity beyond the lab</li>
                  <li>• Socio-economic hardship in the surrounding community affecting academic outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Assessment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Overall Assessment
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Paballelo High School emerges from the available evidence as a significant township public secondary school in Upington, with a strong community footprint, 
              a multilingual learner environment, and growing symbolic importance due to the 2026 cyber lab handover and the public association of the school 
              with Deputy Minister Nonceba Mhlauli.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Although the school has a relatively thin digital public footprint compared with some former Model C or urban schools, the available official records point to a 
              school that is active, established, and embedded in both the educational and social life of Paballelo.
            </p>
            <p className="text-lg text-muted-foreground">
              The school's public profile currently rests on four strong pillars: its role as a public high school in the ZF Mgcawu district, its large learner base, its alumni 
              significance, and its new digital infrastructure investment. With more direct data from the school or the Northern Cape Department of Education, this report 
              could be expanded into a full institutional dossier covering history, performance, staffing, governance, and campus life in much more detail.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The following details appear in public directory and government-related records, but we recommend treating them as publicly listed details requiring school confirmation:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Address</h3>
                </div>
                <p className="text-muted-foreground">
                  Gudula Street<br />
                  Paballelo, Upington<br />
                  8800 / 8801
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Phone</h3>
                </div>
                <p className="text-muted-foreground">
                  054 332 2121
                </p>
              </div>
            </div>
            <div className="mt-8 bg-primary/5 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Contact person in 2021 vacancy notice: Mr ZM Gudula. These details should be confirmed directly with the school before use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
