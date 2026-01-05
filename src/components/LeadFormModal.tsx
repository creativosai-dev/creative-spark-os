import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

interface LeadFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadFormModal = ({ open, onOpenChange }: LeadFormModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get Early Access</DialogTitle>
          <DialogDescription>
            Join the waitlist for CreativOS. We'll reach out within 2 business days.
          </DialogDescription>
        </DialogHeader>
        <LeadForm onSuccess={() => onOpenChange(false)} variant="modal" />
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
