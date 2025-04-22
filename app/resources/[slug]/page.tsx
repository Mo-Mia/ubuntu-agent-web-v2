"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import BlogCard from "@/components/blog-card"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostParams) {
  // This would normally fetch the actual post data
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${title} | The Ubuntu Agent Blog`,
    description: `Read about ${title} and other real estate insights from The Ubuntu Agent in Johannesburg, South Africa.`,
  }
}

export default function BlogPostPage({ params }: BlogPostParams) {
  // This would normally fetch the actual post data
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const relatedPosts = [
    {
      title: "Understanding Johannesburg's Property Market in 2023",
      excerpt:
        "Explore the current trends, opportunities, and challenges in Johannesburg's dynamic real estate landscape.",
      imageSrc: "/placeholder.svg?height=240&width=360",
      slug: "johannesburg-property-market-2023",
      date: "April 15, 2023",
      category: "Market Insights",
    },
    {
      title: "First-Time Buyer's Guide to Johannesburg Neighborhoods",
      excerpt:
        "A comprehensive overview of the best areas for new homeowners in Johannesburg, with insights on schools, amenities, and community.",
      imageSrc: "/placeholder.svg?height=240&width=360",
      slug: "first-time-buyers-guide-johannesburg",
      date: "February 10, 2023",
      category: "Buyer Tips",
    },
    {
      title: "The Impact of Charitable Giving on Community Development",
      excerpt:
        "How initiatives like the Ubuntu Giving Program create ripple effects of positive change throughout Johannesburg neighborhoods.",
      imageSrc: "/placeholder.svg?height=240&width=360",
      slug: "charitable-giving-community-development",
      date: "March 5, 2023",
      category: "Ubuntu Giving",
    },
  ]

  return (
    <>
      {/* Blog Post Header */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources" className="inline-flex items-center text-navy hover:text-gold mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>

            <h1 className="heading-xl mb-4">{title}</h1>

            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime="2023-04-15">April 15, 2023</time>
              </div>

              <div className="flex items-center mr-6 mb-2">
                <User className="h-4 w-4 mr-1" />
                <span>Gary Berkowitz</span>
              </div>

              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 mr-1" />
                <Link href="/resources/category/market-insights" className="hover:text-gold">
                  Market Insights
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
              <Image src="/placeholder.svg?height=400&width=800" alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <p>
                  The Ubuntu philosophy, often translated as "I am because we are," is a profound African concept that
                  recognizes our interconnectedness as human beings. It emphasizes that our humanity is tied together—we
                  find our purpose and meaning through our relationships with others.
                </p>

                <p>
                  In the context of real estate, Ubuntu transforms what could be merely transactional into something
                  deeply relational and community-oriented. When you buy or sell a home with The Ubuntu Agent, you're
                  not just completing a property transaction—you're participating in community building.
                </p>

                <h2>The Ubuntu Approach to Real Estate</h2>

                <p>
                  Traditional real estate focuses primarily on the property and the financial transaction. The Ubuntu
                  approach expands this focus to include the community impact of each transaction. This shift in
                  perspective creates a more meaningful experience for everyone involved.
                </p>

                <p>
                  Through the Ubuntu Giving Program, each real estate transaction becomes an opportunity to strengthen
                  our shared community. By directing 5% of the commission (10% if capped) to local charities chosen by
                  clients, we create a ripple effect of positive change that extends far beyond the property itself.
                </p>

                <blockquote>
                  "Ubuntu does not mean that people should not address themselves. The question therefore is: Are you
                  going to do so in order to enable the community around you to be able to improve?" — Nelson Mandela
                </blockquote>

                <h2>Practical Applications in the Buying Process</h2>

                <p>
                  When buying a home through The Ubuntu Agent, the process includes not just finding the right property,
                  but also understanding the community you're joining. This includes:
                </p>

                <ul>
                  <li>
                    Neighborhood insights that go beyond property values to include community initiatives and local
                    culture
                  </li>
                  <li>Introductions to community resources and networks</li>
                  <li>The opportunity to direct part of the agent's commission to a cause that matters to you</li>
                  <li>Becoming part of a network of homeowners who value community impact</li>
                </ul>

                <h2>Transforming the Selling Experience</h2>

                <p>
                  Selling your home through The Ubuntu Agent means your property transaction creates a lasting legacy in
                  the community you're leaving. This includes:
                </p>

                <ul>
                  <li>Marketing that highlights not just your property, but the community that surrounds it</li>
                  <li>Attracting buyers who value community connection</li>
                  <li>The satisfaction of knowing your transaction will support a cause you care about</li>
                  <li>Creating a meaningful transition as you move to your next home</li>
                </ul>

                <h2>The Broader Impact</h2>

                <p>
                  The Ubuntu approach to real estate creates a virtuous cycle. As more transactions include a charitable
                  component, more resources flow to community organizations. These organizations, in turn, strengthen
                  the community, making neighborhoods more desirable places to live, which positively impacts property
                  values and quality of life.
                </p>

                <p>
                  This approach recognizes that a home is more than just a physical structure—it's part of a community
                  ecosystem. By strengthening that ecosystem, we enhance the value and meaning of each home within it.
                </p>

                <h2>Conclusion</h2>

                <p>
                  The Ubuntu philosophy reminds us that "I am because we are"—our individual success and wellbeing are
                  inextricably linked to the success and wellbeing of our community. By applying this philosophy to real
                  estate, we transform property transactions from isolated events to meaningful contributions to
                  community building.
                </p>

                <p>
                  Whether you're buying or selling a home, consider how your transaction could create positive ripples
                  throughout your community. The Ubuntu approach to real estate offers a way to make one of life's
                  biggest financial decisions also one of its most meaningful.
                </p>
              </article>

              <div className="mt-8 pt-8 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold mb-1">Share this article</h3>
                    <div className="flex space-x-4">
                      <button className="text-navy hover:text-gold" aria-label="Share on Facebook">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="text-navy hover:text-gold" aria-label="Share on Twitter">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="text-navy hover:text-gold" aria-label="Share on LinkedIn">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="text-navy hover:text-gold" aria-label="Share via Email">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <Link href="/resources" className="text-gold font-medium hover:underline">
                      View All Articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="heading-sm mb-4">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Gary Berkowitz"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Gary Berkowitz</h4>
                      <p className="text-sm text-muted-foreground">The Ubuntu Agent</p>
                    </div>
                  </div>
                  <p className="text-body-sm mb-4">
                    Gary is a real estate agent in Johannesburg with a passion for community impact through the Ubuntu
                    philosophy. He donates 5% of his commission to local charities chosen by his clients.
                  </p>
                  <Link href="/about" className="text-gold font-medium hover:underline">
                    Learn more about Gary
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="heading-sm mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/resources/category/market-insights" className="text-navy hover:text-gold">
                        Market Insights
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/category/buyer-tips" className="text-navy hover:text-gold">
                        Buyer Tips
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/category/seller-tips" className="text-navy hover:text-gold">
                        Seller Tips
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/category/ubuntu-giving" className="text-navy hover:text-gold">
                        Ubuntu Giving
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/category/financing" className="text-navy hover:text-gold">
                        Financing
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/category/legal-financial" className="text-navy hover:text-gold">
                        Legal & Financial
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy text-white p-6 rounded-lg">
                  <h3 className="heading-sm mb-4">Ready to Make Your Move Matter?</h3>
                  <p className="text-body-sm mb-4">
                    Connect with Gary to discuss your real estate needs and how you can make a positive community impact
                    through your property transaction.
                  </p>
                  <Link href="/contact" className="btn-primary w-full text-center">
                    Contact Gary
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Continue Reading"
            title="Related Articles"
            description="Explore more insights on real estate and community impact."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {relatedPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                imageSrc={post.imageSrc}
                slug={post.slug}
                date={post.date}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 