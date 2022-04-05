import { useEffect } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { useAuth } from '../../Hooks/useAuth';
import { getStatistics } from '../../services/api';
import { StatsView } from './style';

export function StatsPage() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    async function getStats() {
      const today = new Date();
      const response = await getStatistics(user.id, today);
      console.log(response);
    }

    getStats();
  }, []);

  return (
    <>
      {user && (
        <>
          <Navbar options={[{ name: 'Dashboard', goTo: '/dashboard' }]} />
          <div className="default-container">
            <StatsView>
              <h1>Hey, {user.email} !</h1>
              <p>Here you find your stats.</p>

              <section className="weekTotalHours">
                <div className="heading">
                  <h1>Uhul ! Today you were </h1>
                  <h3>87% productive</h3>
                </div>
              </section>

              <section className="weekTotalHours">
                <div className="heading">
                  <h1>Biggest task of the week</h1>
                  <h3>item 1 with 2 hours</h3>
                </div>
              </section>

              <section className="weekTotalHours">
                <div className="heading">
                  <h1>Total hours of the week</h1>
                  <h3>196 hours</h3>
                </div>
              </section>

              <section className="dayTotalHours">
                <div className="heading">
                  <h1>Total hours of the day</h1>
                  <h3>76 hours</h3>
                </div>
              </section>
            </StatsView>
          </div>
        </>
      )}
    </>
  );
}
