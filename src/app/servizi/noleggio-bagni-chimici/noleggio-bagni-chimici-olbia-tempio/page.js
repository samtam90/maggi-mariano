import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Olbia-Tempio",
  canonical: links.servizi["noleggio-bagni-chimici"]["olbia-tempio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Olbia-Tempio", 
  locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"} 
});
