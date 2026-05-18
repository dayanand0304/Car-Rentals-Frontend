import {
  Car,
  Users,
  FileText,
  DollarSign,
} from "lucide-react";

import PageContainer from "@/components/shared/layout/PageContainer";
import PageHeader from "@/components/shared/layout/PageHeader";

import StatsCard from "@/components/shared/dashboard/StatsCard";

const DashboardPage = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        description="Overview of your car rentals platform"
      />

      <div
        className="
          grid gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <StatsCard
          title="Total Cars"
          value="120"
          icon={<Car className="h-4 w-4" />}
        />

        <StatsCard
          title="Customers"
          value="540"
          icon={<Users className="h-4 w-4" />}
        />

        <StatsCard
          title="Active Rentals"
          value="89"
          icon={<FileText className="h-4 w-4" />}
        />

        <StatsCard
          title="Revenue"
          value="$24,000"
          icon={<DollarSign className="h-4 w-4" />}
        />
      </div>
    </PageContainer>
  );
};

export default DashboardPage;