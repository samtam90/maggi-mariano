import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Pavia",
    canonical: links.autospurgo["pavia"],
});
export default withBaseProps({ 
    title: "Autospurgo Pavia", 
    locationNames: {label: "Pavia", href: "pavia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["pavia"],
        name: "Pavia",
    }),
});
