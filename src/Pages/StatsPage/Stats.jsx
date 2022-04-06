import { useEffect, useState } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { useAuth } from '../../Hooks/useAuth';
import { getStatistics } from '../../services/api';
import { StatsView } from './style';

export function StatsPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user) return;

    async function getStats() {
      try {
        const response = await getStatistics(user.id);
        setStats(response.data.stats);
      } catch (e) {
        return;
      }
    }

    getStats();
  }, []);

  return (
    <>
      {console.log(stats)}

      <Navbar options={[{ name: 'Dashboard', goTo: '/dashboard' }]} />
      <>
        {stats ? (
          <div className="default-container">
            <StatsView>
              <h1>Hey, {user.email} !</h1>
              <p>Here you find your stats.</p>

              <section className="weekTotalHours">
                <div className="heading">
                  <h1>Uhul ! Today you were </h1>
                  <h3>
                    {Number(stats.dayProductivityPercentage).toFixed(2)}%
                    productive
                  </h3>
                </div>
              </section>

              <section className="weekTotalHours">
                <div className="heading">
                  <h1>Biggest task of the week</h1>
                  <h3>
                    {stats.descTimerArrValue[0].taskName} with{' '}
                    {Number(stats.descTimerArrValue[0].hoursSum).toFixed(2)}{' '}
                    hours
                  </h3>
                </div>
              </section>

              <section className="weekTotalHours">
                <div className="heading">
                  <h1>Total hours of the week</h1>
                  <h3>{Number(stats.weekHoursSpentSum).toFixed(2)} hours</h3>
                </div>
              </section>

              <section className="dayTotalHours">
                <div className="heading">
                  <h1>Total hours of the day</h1>
                  <h3>{Number(stats.hoursSpentSum).toFixed(2)} hours</h3>
                </div>
              </section>
            </StatsView>
          </div>
        ) : (
          <div className="default-container">
            <StatsView>
              <h1>Wanna get some stats ? Create some tasks first !</h1>
            </StatsView>
          </div>
        )}
      </>
    </>
  );
}
