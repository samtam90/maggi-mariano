import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Trapani",
    canonical: links.autospurgo["trapani"],
});
export default withBaseProps({ 
    title: "Autospurgo Trapani", 
    locationNames: {label: "Trapani", href: "trapani"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["trapani"],
        name: "Trapani",
    }),
});
