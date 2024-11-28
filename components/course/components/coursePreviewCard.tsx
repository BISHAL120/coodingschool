import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  PlayCircle,
  Clock,
  Shield,
  Award,
  Download,
  MonitorSmartphone,
  InfinityIcon,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Clock,
    text: "Lifetime Access",
  },
  {
    icon: Shield,
    text: "30-Day Guarantee",
  },
  {
    icon: Award,
    text: "Certificate",
  },
  {
    icon: Download,
    text: "Downloadable",
  },
  {
    icon: MonitorSmartphone,
    text: "Access on all devices",
  },
  {
    icon: InfinityIcon,
    text: "Updates Included",
  },
];

const CoursePreviewCard = () => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-video group cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
          width={600}
          height={500}
          alt="Course preview"
          className={`object-cover w-full overflow-hidden h-[390px] transition-transform duration-300 group-hover:scale-110`}
        />
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 opacity-0`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="w-16 h-16 rounded-full animate-pulse"
          >
            <PlayCircle className="w-8 h-8" />
          </Button>
          <span className="absolute bottom-4 text-white text-sm font-medium">
            Watch Preview
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">$89.99</div>
              <div className="text-sm text-muted-foreground line-through">
                $129.99
              </div>
            </div>
            <div className="space-y-2 text-right">
              <Badge variant="destructive" className="animate-bounce">
                30% OFF
              </Badge>
              <div className="text-xs text-muted-foreground">
                2 days left at this price!
              </div>
            </div>
          </div>

          <Button className="w-full relative overflow-hidden group" size="lg">
            <span className="relative z-10 group-hover:text-white">
              Enroll Now
            </span>
            <div className="absolute inset-0 bg-primary-foreground transform translate-y-full  group-hover:translate-y-0 transition-transform duration-300"></div>
          </Button>

          <div className="pt-4 space-y-4 border-t">
            <div className="space-y-2 flex justify-between items-center">
              <h4 className="text-lg font-semibold">Course Highlights</h4>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>891 enrolled this week</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon; // Use the icon from the feature
                return (
                  <div
                    key={feature.text}
                    className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4 mr-2 flex-shrink-0" />{" "}
                    {/* Render the icon component */}
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CoursePreviewCard;
