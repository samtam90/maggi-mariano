import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bagno a Ripoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["bagno-a-ripoli"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bagno a Ripoli", 
  locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"} 
});
