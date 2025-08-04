import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pietralunga",
  canonical: links.servizi["noleggio-bagni-chimici"]["pietralunga"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pietralunga", 
  locationNames: {label: "Pietralunga", href: "pietralunga"} 
});
