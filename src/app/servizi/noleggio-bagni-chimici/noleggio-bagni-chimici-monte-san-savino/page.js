import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monte San Savino",
  canonical: links.servizi["noleggio-bagni-chimici"]["monte-san-savino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Monte San Savino", 
  locationNames: {label: "Monte San Savino", href: "monte-san-savino"} 
});
