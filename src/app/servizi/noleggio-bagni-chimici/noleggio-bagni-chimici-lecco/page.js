import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lecco",
  canonical: links.servizi["noleggio-bagni-chimici"]["lecco"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lecco", 
  locationNames: {label: "Lecco", href: "lecco"} 
});
