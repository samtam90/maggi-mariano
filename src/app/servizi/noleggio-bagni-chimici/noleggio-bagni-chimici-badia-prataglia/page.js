import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Badia Prataglia",
  canonical: links.servizi["noleggio-bagni-chimici"]["badia-prataglia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Badia Prataglia", 
  locationNames: {label: "Badia Prataglia", href: "badia-prataglia"} 
});
