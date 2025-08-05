import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Empoli",
  canonical: links.servizi["centrifugazione-fanghi"]["empoli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Empoli",
  locationNames: { label: "Empoli", href: "empoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
