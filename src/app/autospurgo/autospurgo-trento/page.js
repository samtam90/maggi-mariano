import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Trento",
    canonical: links.autospurgo["trento"],
});
export default withBaseProps({ 
    title: "Autospurgo Trento", 
    locationNames: {label: "Trento", href: "trento"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["trento"],
        name: "Trento",
    }),
});
