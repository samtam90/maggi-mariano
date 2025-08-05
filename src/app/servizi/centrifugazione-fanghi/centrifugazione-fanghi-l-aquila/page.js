import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi L'Aquila",
  canonical: links.servizi["centrifugazione-fanghi"]["l-aquila"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi L'Aquila",
  locationNames: { label: "L'Aquila", href: "l-aquila" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["l-aquila"],
      name: "L'Aquila",
  }),
});
