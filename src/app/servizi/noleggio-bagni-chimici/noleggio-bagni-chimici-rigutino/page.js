import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rigutino",
  canonical: links.servizi["noleggio-bagni-chimici"]["rigutino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rigutino", 
  locationNames: {label: "Rigutino", href: "rigutino"} 
});
