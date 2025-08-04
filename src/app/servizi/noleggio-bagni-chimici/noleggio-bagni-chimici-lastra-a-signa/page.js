import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lastra a Signa",
  canonical: links.servizi["noleggio-bagni-chimici"]["lastra-a-signa"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lastra a Signa", 
  locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"} 
});
