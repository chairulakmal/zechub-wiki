import { saveBannerMessage } from '@/app/actions';
import { authOptions } from '@/auth.config';
import { Authentication } from '@/components/Authentication';
import { NotificationBannerForm } from '@/components/Notification/NotificationBannerForm/NotificationBannerForm';
import { getServerSession } from 'next-auth';

export default async function BannerNotificationPage() {
  const session = await getServerSession(authOptions); // TODO: check for user.role === 'admin'
  return (
    <>
      <Authentication session={session}>
        <NotificationBannerForm formAction={saveBannerMessage} />
      </Authentication>
    </>
  );
}
