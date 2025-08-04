import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bevagna",
  canonical: links.servizi["noleggio-bagni-chimici"]["bevagna"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bevagna", 
  locationNames: {label: "Bevagna", href: "bevagna"} 
});
