import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Pisa",
    canonical: links.autospurgo["pisa"],
});
export default withBaseProps({ 
    title: "Autospurgo Pisa", 
    locationNames: {label: "Pisa", href: "pisa"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["pisa"],
        name: "Pisa",
    }),
});
