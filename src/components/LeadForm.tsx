import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  agencyName: z.string().min(2, "Agency name must be at least 2 characters").max(100),
  location: z.string().min(2, "Please enter your city and state").max(100),
  monthlyAdSpend: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  onSuccess?: () => void;
  variant?: "modal" | "inline";
}

const LeadForm = ({ onSuccess, variant = "modal" }: LeadFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsLoading(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("Thanks! We'll email you within 2 business days.");
    
    if (onSuccess) {
      setTimeout(onSuccess, 2000);
    }
    
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
        <p className="text-muted-foreground">
          Thanks — we'll email you within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          placeholder="Your name"
          {...register("name")}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@agency.com"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="agencyName">Agency Name *</Label>
        <Input
          id="agencyName"
          placeholder="Your agency"
          {...register("agencyName")}
          className={errors.agencyName ? "border-destructive" : ""}
        />
        {errors.agencyName && (
          <p className="text-sm text-destructive">{errors.agencyName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location (City, State) *</Label>
        <Input
          id="location"
          placeholder="Mumbai, Maharashtra"
          {...register("location")}
          className={errors.location ? "border-destructive" : ""}
        />
        {errors.location && (
          <p className="text-sm text-destructive">{errors.location.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthlyAdSpend">Monthly Ad Spend (optional)</Label>
        <Input
          id="monthlyAdSpend"
          placeholder="₹50,000"
          {...register("monthlyAdSpend")}
        />
        <p className="text-xs text-muted-foreground">Numbers only, helps us understand your scale</p>
      </div>

      <Button 
        type="submit" 
        variant={variant === "modal" ? "hero" : "default"} 
        size="lg" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export default LeadForm;
