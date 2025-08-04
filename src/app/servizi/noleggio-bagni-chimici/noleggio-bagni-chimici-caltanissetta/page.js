import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caltanissetta",
  canonical: links.servizi["noleggio-bagni-chimici"]["caltanissetta"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Caltanissetta", 
  locationNames: {label: "Caltanissetta", href: "caltanissetta"} 
});
