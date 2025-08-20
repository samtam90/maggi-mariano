import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Montevarchi",
    canonical: links.autospurgo["montevarchi"],
});
export default withBaseProps({ 
    title: "Autospurgo Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
