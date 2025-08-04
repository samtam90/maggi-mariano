import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Empoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["empoli"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Empoli", 
  locationNames: {label: "Empoli", href: "empoli"} 
});
