import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo San Venanzo",
    canonical: links.autospurgo["san-venanzo"],
});
export default withBaseProps({ 
    title: "Autospurgo San Venanzo", 
    locationNames: {label: "San Venanzo", href: "san-venanzo"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
