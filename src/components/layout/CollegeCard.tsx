import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";



const CollegeCard = () => {
  return (
    <Card className="hover:shadow-lg transition-all">
    <CardHeader>
      {/* <img
        src="https://via.placeholder.com/300"
        alt="College"
        className="rounded-lg w-full h-40 object-cover"
      /> */}
      <CardTitle>Example College</CardTitle>
      <CardDescription>Admission: 01 June - 30 July</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="text-sm space-y-1">
        <li>🎉 Events: Cultural Fest, Seminar</li>
        <li>🔬 Research: AI, ML, Quantum</li>
        <li>⚽ Sports: Football, Cricket</li>
      </ul>
      <Button className="mt-4 w-full" variant="default">
        View Details
      </Button>
    </CardContent>
  </Card>

  );
};

export default CollegeCard;