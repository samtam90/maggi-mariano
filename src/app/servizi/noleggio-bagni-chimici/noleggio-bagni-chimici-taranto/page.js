import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Taranto",
  canonical: links.servizi["noleggio-bagni-chimici"]["taranto"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Taranto", 
  locationNames: {label: "Taranto", href: "taranto"} 
});
