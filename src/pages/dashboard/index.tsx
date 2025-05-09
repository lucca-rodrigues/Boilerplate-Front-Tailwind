import { useDashboard } from './hooks';
import { DashboardTemplate } from './template';

export function Dashboard() {
  const hookParams = useDashboard();

  const sharedProps = {
    ...hookParams,
  };

  return <DashboardTemplate {...sharedProps} />;
}
