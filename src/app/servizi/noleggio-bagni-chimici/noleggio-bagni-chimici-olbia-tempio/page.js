import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Olbia-Tempio",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Olbia-Tempio", 
  locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"} 
});
