import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Roma",
    canonical: links.autospurgo["roma"],
});
export default withBaseProps({ 
    title: "Autospurgo Roma", 
    locationNames: {label: "Roma", href: "roma"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["roma"],
        name: "Roma",
    }),
});
