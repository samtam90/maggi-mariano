import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Loro ciuffenna",
  canonical: links.servizi["noleggio-bagni-chimici"]["loro-ciuffenna"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Loro ciuffenna", 
  locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"} 
});
