import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montespertoli",
  canonical: links.servizi["centrifugazione-fanghi"]["montespertoli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montespertoli",
  locationNames: { label: "Montespertoli", href: "montespertoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
