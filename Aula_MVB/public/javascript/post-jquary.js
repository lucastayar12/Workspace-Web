Posts = {
    add: () => {
        var t = {};
        t.conteudo = $("#conteudo").val();
        t.firstName = $("#firstName").val();
        t.lastName = $("#lastName").val();

        $.ajax({
            type: "POST",
            url: "/posts",
            data: t,
            dataType: "json",
            success: Posts.tamplate
        })

        return false;

    },

    tamplate: (data) => {

        var comment = $("<div></div>").attr("id", "comment- " + data.id).attr("class", "comment");

        var content = $("<textarea></textarea>").attr("class", "content").attr("disabled", true).html(data.conteudo);

        var user = $("<p></p>").attr("class", "user").html("Por " + data.user.firstName + " " + data.user.lastName + " ");

        var dtCreation = new Date(data.createdAt);
        dtCreation = (dtCreation.getDate() < 10 ? "0" + dtCreation.getDate() : dtCreation.getDate() +
            "/" + ((dtCreation.getMonth() + 1) < 10 ? "0" + (dtCreation.getMonth() + 1) : (dtCreation.getMonth() + 1)) +
            "/" + dtCreation.getFullYear());

        var date = $("<span></span>").attr("class", "date").html(dtCreation);

        var btnEdit = $("<button></button>").attr("class", "edit").html("Editar");
        var btnSave = $("<button></button>").attr("class", "save hidden").html("Salvar");
        var btnRemove = $("<button></button>").attr("class", "remove").html("Remover");

        $(btnEdit).on("click", (event) => {
            Posts.enableEdit(event.target);
        });

        $(btnSave).on("click", (event) => {
            Posts.update(event.target);
        });

        $(btnRemove).on("click", (event) => {
            Posts.remove(event.target);
        });

        $(user).append(date);
        $(comment).append(content);
        $(comment).append(user);
        $(comment).append(btnEdit);
        $(comment).append(btnSave);
        $(comment).append(btnRemove);
        $(comment).append("<br><br>");

        $("#coments").append(comment);

    },

    findAll: () => {

        $.ajax({
            type: "GET",
            url: "/posts",
            success: (data) => {
                for (var post of data) {
                    Posts.tamplate(post);
                }
            },

            error: () => {
                console.log("Ocorreu um erro !");

            },
            dataType: "json"


        })

    },

    enableEdit: (button) => {
        var comment = $(button).parent();

        $(comment).children("textarea").attr("disabled", false);
        $(comment).children("button.edit").hide();
        $(comment).children("button.save").show();

    },

    update: (button) => {
        var comment = $(button).parent();

        var id = $(comment).attr("id").replace("comment-", "");
        var content = $(comment).children("textarea").val();

        $.ajax({
            type: "PUT",
            url: "/posts",
            data: { "conteudo": content, "id": id },
            success: (data) => {
                $(comment).children("textarea").attr("disabled", true);
                $(comment).children("button.edit").show();
                $(comment).children("button.save").hide();
            },
            error: () => {

            }
        })

    },

    remove : (button) => {
        
        var comment = $(button).parent();
        var id = $(comment).attr("id").replace("comment-", "");

        $.ajax({
            type: "DELETE",
            url: "/posts",
            data: {"id": id },
            success: (data) => {
                $(comment).remove();

            },
            error: () => {

            }
        })



    }
}

$(document).ready(() => {
    Posts.findAll();
});