import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Montecastrilli",
    canonical: links.autospurgo["montecastrilli"],
});
export default withBaseProps({ 
    title: "Autospurgo Montecastrilli", 
    locationNames: {label: "Montecastrilli", href: "montecastrilli"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
