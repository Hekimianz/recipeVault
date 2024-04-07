import styles from "./css/Home.module.css";

function Home({ screenSize }) {
  return (
    <div className={styles.mainHomeCont}>
      <div className={styles.picture}>
        <div className={styles.darkOverlay}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>RecipeVault</h2>
            <p className={styles.sectionSubTitle}>
              {screenSize === "small" ? (
                "Your ultimate destination for culinary inspiration and sharing!"
              ) : (
                <>
                  Your ultimate destination for culinary inspiration and
                  sharing!
                  <br />
                  Dive in, explore, and let your culinary creativity shine
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.dividedSection}>
        <div className={styles.gridBox}>
          <h3 className={styles.gridTitle}>Discover</h3>
          <p className={styles.gridText}>
            Explore a vast collection of mouthwatering recipes spanning cuisines
            from around the globe.
          </p>
        </div>
        <div className={styles.gridBox}>
          <h3 className={styles.gridTitle}>Share</h3>
          <p className={styles.gridText}>
            Showcase your culinary prowess by sharing your favorite recipes with
            our passionate community.
          </p>
        </div>
        <div className={styles.gridBox}>
          <h3 className={styles.gridTitle}>Connect</h3>
          <p className={styles.gridText}>
            Connect with fellow food lovers, exchange cooking tips, and receive
            feedback on your creations.
          </p>
        </div>
      </div>

      <div className={styles.featuredSection}>
        <h3 className={styles.featuredSectionTitle}>Featured Recipes</h3>
      </div>
    </div>
  );
}

export default Home;
