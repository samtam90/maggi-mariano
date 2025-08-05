import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Galeata",
  canonical: links.servizi["centrifugazione-fanghi"]["galeata"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Galeata",
  locationNames: { label: "Galeata", href: "galeata" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
