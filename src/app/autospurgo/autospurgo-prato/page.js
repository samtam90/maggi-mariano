import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Prato",
    canonical: links.autospurgo["prato"],
});
export default withBaseProps({ 
    title: "Autospurgo Prato", 
    locationNames: {label: "Prato", href: "prato"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["prato"],
        name: "Prato",
    }),
});
