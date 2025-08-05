import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Vercelli",
    canonical: links.autospurgo["vercelli"],
});
export default withBaseProps({ 
    title: "Autospurgo Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["vercelli"],
        name: "Vercelli",
    }),
});
