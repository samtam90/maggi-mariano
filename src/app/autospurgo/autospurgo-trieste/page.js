import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Trieste",
    canonical: links.autospurgo["trieste"],
});
export default withBaseProps({ 
    title: "Autospurgo Trieste", 
    locationNames: {label: "Trieste", href: "trieste"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["trieste"],
        name: "Trieste",
    }),
});
