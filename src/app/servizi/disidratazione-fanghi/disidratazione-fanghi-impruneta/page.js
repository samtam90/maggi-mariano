import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Impruneta",
  canonical: links.servizi["disidratazione-fanghi"]["impruneta"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Impruneta",
  locationNames: { label: "Impruneta", href: "impruneta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
