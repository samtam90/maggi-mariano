import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bucine",
  canonical: links.servizi["noleggio-bagni-chimici"]["bucine"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bucine", 
  locationNames: {label: "Bucine", href: "bucine"} 
});
